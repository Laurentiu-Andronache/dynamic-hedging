import { gql, useQuery } from "@apollo/client";
import dayjs from "dayjs";
import { BigNumber } from "ethers";
import { useCallback, useState, useEffect } from "react";
import NumberFormat from "react-number-format";
import { captureException } from "@sentry/react";
import { AnimatePresence, motion } from "framer-motion";
import { useAccount } from "wagmi";

import OpynController from "../../abis/OpynController.json";
import { DECIMALS, ZERO_ADDRESS } from "../../config/constants";
import { useContract } from "../../hooks/useContract";
import { useExpiryPriceData } from "../../hooks/useExpiryPriceData";
import { renameOtoken } from "../../utils/conversion-helper";
import { Button } from "../shared/Button";
import { Card } from "../shared/Card";
import { fromOpynHumanised } from "../../utils/conversion-helper";
import LoadingOrError from "../shared/Loading";
import FadeInOut from "src/animation/FadeInOut";
import FadeInUpDelayed from "src/animation/FadeInUpDelayed";

interface Position {
  __typename: string;
  id: string;
  oToken: {
    __typename: string;
    id: string;
    symbol: string;
    expiryTimestamp: string;
    strikePrice: string;
    isPut: boolean;
    underlyingAsset: {
      __typename: string;
      id: string;
    };
  };
  writeOptionsTransactions: { premium: BigNumber }[];
  account: {
    __typename: string;
    balances: {
      __typename: string;
      balance: string;
      token: {
        __typename: string;
        id: string;
      };
    }[];
  };
}

interface ParsedPosition {
  amount: number;
  entryPrice: string;
  expired: boolean;
  expiryPrice?: string;
  expiryTimestamp: string;
  id: string;
  isPut: boolean;
  isRedeemable: boolean;
  otokenId: string;
  side: string;
  strikePrice: string;
  symbol: string;
  underlyingAsset: string;
}

enum ActionType {
  OpenVault,
  MintShortOption,
  BurnShortOption,
  DepositLongOption,
  WithdrawLongOption,
  DepositCollateral,
  WithdrawCollateral,
  SettleVault,
  Redeem,
  Call,
  Liquidate,
  InvalidAction,
}

export const UserOptions = () => {
  const isConnected = true;
  const isDisconnected = false;
  const address = "0x04706de6ce851a284b569ebae2e258225d952368";

  // const { address, isConnected, isDisconnected } = useAccount();
  const { allOracleAssets } = useExpiryPriceData();
  const [positions, setPositions] = useState<ParsedPosition[] | null>(null);

  const { loading, error, data } = useQuery<{ positions: Position[] }>(
    gql`
      query ($account: String) {
        positions(first: 1000, where: { account_contains: $account }) {
          id
          oToken {
            id
            symbol
            expiryTimestamp
            strikePrice
            isPut
            underlyingAsset {
              id
            }
          }
          writeOptionsTransactions {
            premium
          }
          account {
            balances {
              balance
              token {
                id
              }
            }
          }
        }
      }
    `,
    {
      onError: (err) => {
        captureException(err);
        console.error(err);
      },
      variables: {
        account: address?.toLowerCase(),
      },
      skip: !address,
    }
  );

  useEffect(() => {
    if (data && allOracleAssets) {
      const timeNow = dayjs().unix();

      const parsedPositions = data.positions.map(
        ({ id, oToken, account, writeOptionsTransactions }) => {
          const {
            id: otokenId,
            expiryTimestamp,
            underlyingAsset,
            isPut,
            strikePrice,
          } = oToken;

          const expired = timeNow > Number(expiryTimestamp);

          ////////////////////////////////////////////////////
          // IS THIS CODE BEING USED? SIZE AND ENTRY ALWAYS 0?

          // Check for oToken balance.
          const matchingToken = account.balances.filter(
            ({ token }) => token.id === id
          )[0];
          const otokenBalance =
            matchingToken && matchingToken.balance
              ? Number(matchingToken.balance)
              : 0;

          // 1e8
          const totPremium = writeOptionsTransactions.length
            ? writeOptionsTransactions.reduce(
                (prev: number, { premium }: { premium: BigNumber }) =>
                  prev + Number(premium),
                0
              )
            : 0;

          // premium converted to 1e18
          const entryPrice =
            otokenBalance > 0 && totPremium > 0
              ? Number(
                  totPremium /
                    (otokenBalance * 10 ** (DECIMALS.RYSK - DECIMALS.OPYN))
                ).toFixed(2)
              : "0.00";

          ////////////////////////////////////////////////////

          // Find expiry price
          const asset = allOracleAssets.find(
            ({ asset }) => asset.id === underlyingAsset.id
          );
          const expiryPrice = asset?.prices.find(
            ({ expiry }: { expiry: string }) => expiry === expiryTimestamp
          )?.price;

          // Check if redeemable
          const isRedeemable = isPut
            ? Number(expiryPrice) <= Number(strikePrice)
            : Number(expiryPrice) >= Number(strikePrice);

          return {
            ...oToken,
            id,
            expired,
            amount: otokenBalance,
            entryPrice,
            underlyingAsset: underlyingAsset.id,
            side: "LONG",
            expiryPrice,
            isRedeemable,
            otokenId,
          };
        }
      );

      // Unexpired options sorted closest to furtherest by expiry time.
      // Expired options sorted most recent to oldest.
      // Options with the same expiry date are sorted highest to lowest strike price.
      parsedPositions.sort((a, b) => {
        if (!a.expired && !b.expired) {
          return (
            a.expiryTimestamp.localeCompare(b.expiryTimestamp) ||
            a.strikePrice.localeCompare(b.strikePrice)
          );
        }

        return (
          b.expiryTimestamp.localeCompare(a.expiryTimestamp) ||
          b.strikePrice.localeCompare(a.strikePrice)
        );
      });

      setPositions(parsedPositions);
    }
  }, [data, allOracleAssets]);

  useEffect(() => {
    if (isDisconnected) setPositions([]);
  }, [isDisconnected]);

  const [opynControllerContract, opynControllerContractCall] = useContract({
    contract: "OpynController",
    ABI: OpynController,
    readOnly: false,
  });

  const completeRedeem = useCallback(
    async (otokenId: string, amount: number) => {
      const args = {
        actionType: ActionType.Redeem,
        owner: ZERO_ADDRESS,
        secondAddress: address,
        asset: otokenId,
        vaultId: "0",
        amount,
        index: "0",
        data: ZERO_ADDRESS,
      };

      await opynControllerContractCall({
        method: opynControllerContract?.operate,
        args: [[args]],
        completeMessage: "✅ Order complete",
      });
    },
    [
      ActionType.Redeem,
      address,
      opynControllerContract,
      opynControllerContractCall,
    ]
  );

  const tableHeadings = [
    {
      children: "Side",
      className: "col-span-1",
    },
    {
      children: "Option",
      className: "col-span-3",
    },
    {
      children: "Size",
      className: "col-span-2 text-right",
    },
    {
      children: "Entry Price",
      className: "col-span-2 text-right",
    },
    {
      children: "Settlement Price",
      className: "col-span-2 text-right",
    },
    {
      children: "Actions",
      className: "col-span-2 text-center",
    },
  ];

  return (
    <Card
      wrapperClasses="mb-24"
      tabWidth={280}
      tabs={[
        {
          label: loading && !positions ? "Loading..." : "RYSK.Options",
          content: (
            <>
              <AnimatePresence initial={false} mode="wait">
                {(loading || error) && (
                  <LoadingOrError
                    key="loading-or-error"
                    error={error}
                    extraStrings={["Processing options..."]}
                  />
                )}

                {isConnected && positions && (
                  <>
                    {positions.length ? (
                      <motion.table
                        key="table"
                        {...FadeInOut()}
                        className="block [&>*]:block [&_th]:font-medium"
                      >
                        <thead>
                          <tr className="grid grid-cols-12 gap-4 text-left text-lg p-4 border-b-2 border-black ">
                            {tableHeadings.map((heading) => (
                              <th key={heading.children} {...heading} />
                            ))}
                          </tr>
                        </thead>

                        <tbody className="bg-[url('./assets/ascii_motion_loop.gif')]  bg-auto">
                          {positions.map(
                            (
                              {
                                amount,
                                entryPrice,
                                expired,
                                expiryPrice,
                                id,
                                isRedeemable,
                                otokenId,
                                side,
                                symbol,
                              },
                              index
                            ) => (
                              <motion.tr
                                key={id}
                                {...FadeInUpDelayed(Math.min(index * 0.1, 2))}
                                className="w-auto h-16 grid grid-cols-12 gap-4 items-center px-4 ease-in-out duration-100 odd:bg-bone-light even:bg-bone/90 hover:bg-bone-dark/90 hover:odd:bg-bone-dark"
                              >
                                <td className="col-span-1 text-green-700">
                                  {side}
                                </td>
                                <td className="col-span-3">
                                  {renameOtoken(symbol)}
                                </td>
                                <NumberFormat
                                  value={fromOpynHumanised(
                                    BigNumber.from(amount)
                                  )}
                                  displayType={"text"}
                                  decimalScale={2}
                                  renderText={(value) => (
                                    <td className="col-span-2 text-right">
                                      {value}
                                    </td>
                                  )}
                                />
                                <NumberFormat
                                  value={entryPrice}
                                  displayType={"text"}
                                  prefix="$"
                                  decimalScale={2}
                                  renderText={(value) => (
                                    <td className="col-span-2 text-right">
                                      {value}
                                    </td>
                                  )}
                                />
                                <NumberFormat
                                  value={fromOpynHumanised(expiryPrice)}
                                  displayType={"text"}
                                  prefix="$"
                                  decimalScale={2}
                                  renderText={(value) => (
                                    <td className="col-span-2 text-right">
                                      {value || "-"}
                                    </td>
                                  )}
                                />
                                {isRedeemable && (
                                  <td className="col-span-2 text-center">
                                    <Button
                                      onClick={() =>
                                        completeRedeem(otokenId, amount)
                                      }
                                      className="min-w-[50%]"
                                      title="Click to redeem"
                                    >
                                      {`Redeem`}
                                    </Button>
                                  </td>
                                )}
                                {!expired && (
                                  <td className="col-span-2 text-center text-sm">{`Contact team to close position`}</td>
                                )}
                              </motion.tr>
                            )
                          )}
                        </tbody>
                      </motion.table>
                    ) : (
                      <motion.p
                        key="none-found"
                        {...FadeInOut()}
                        className="p-4"
                      >
                        {`No positions found. Why not contact the Rysk team to open one?`}
                      </motion.p>
                    )}
                  </>
                )}

                {isDisconnected && (
                  <motion.p key="disconnected" {...FadeInOut()} className="p-4">
                    {"Please connect a wallet to view your options."}
                  </motion.p>
                )}
              </AnimatePresence>
            </>
          ),
        },
      ]}
    />
  );
};

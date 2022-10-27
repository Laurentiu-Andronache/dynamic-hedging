import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { BigNumber, utils } from "ethers/lib/ethers";
import NumberFormat from "react-number-format";
import { BIG_NUMBER_DECIMALS, DECIMALS } from "../../config/constants";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
} from "recharts";
import { Card } from "../shared/Card";
import { useWalletContext } from "../../App";

interface CustomTooltipT {
  active?: boolean;
  payload?: Array<{ value: string; length: number }>;
  label?: string;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipT) => {
  if (label && active && payload && payload.length) {
    const date = new Date(parseInt(label) * 1000);
    return (
      <div className="custom-tooltip bg-bone bg-opacity-75 border-black p-4 border-2 border-b-2 rounded-xl border-black">
        <p>
          {date.toLocaleString("default", {
            month: "short",
            day: "2-digit",
            year: "2-digit",
          })}
        </p>
        <p className="label">
          PnL :{" "}
          <NumberFormat
            value={payload[0].value}
            displayType={"text"}
            decimalScale={2}
            suffix=" USDC"
          />
        </p>
      </div>
    );
  }

  return null;
};

export const UserEpochPNL = () => {
  const [historicalPNL, setHistoricalPNL] = useState<any[]>();

  const { account } = useWalletContext();

  useQuery(
    gql`
            query {
                pricePerShares {
                    id
                    growthSinceFirstEpoch
                    value
                    timestamp
                }
                initiateWithdrawActions (where: { address: "${account}" }){
                    id
                    amount
                    epoch

                }
                depositActions (where: { address: "${account}" }) {
                    id
                    amount
                    epoch
                }
            }
        `,
    {
      onCompleted: (data) => {
        console.log("PNL Epoch:", data);

        const amountsByEpoch: any = {};

        data?.depositActions
          ? data.depositActions.map((deposit: any) => {
              amountsByEpoch[deposit.epoch] = {
                collateralDeposit: deposit.amount,
              };
            })
          : [];

        data?.initiateWithdrawActions
          ? data.initiateWithdrawActions.map((deposit: any) => {
              amountsByEpoch[deposit.epoch] = {
                ...amountsByEpoch[deposit.epoch],
                sharesWithdraw: deposit.amount,
              };
            })
          : [];

        const tempPNL: any = [];

        data?.pricePerShares &&
          data.pricePerShares.map((ppsEpoch: any, i: number, values: any) => {
            console.log(`EPOCH ${i}`);

            const dateLocale = new Date(
              parseInt(ppsEpoch.timestamp) * 1000
            ).toLocaleString("default", {
              month: "numeric",
              day: "numeric",
              year: "numeric",
            });

            console.log("Date Locale: ", dateLocale);

            // pps price is 18 decimals and usdc deposits are 6 decimals
            const collateralDeposit =
              amountsByEpoch[ppsEpoch.id]?.collateralDeposit || "0";
            const sharesWithdraw =
              amountsByEpoch[ppsEpoch.id]?.sharesWithdraw || "0";

            const sharesWithdrawAsCollateral = BigNumber.from(sharesWithdraw)
              .div(ppsEpoch.value)
              .mul(BIG_NUMBER_DECIMALS.RYSK) // back to RYSK (18) based
              .div(BIG_NUMBER_DECIMALS.RYSK.div(BIG_NUMBER_DECIMALS.USDC)); // now USDC (6) based

            const collateralDepositInRyskDecimals = BigNumber.from(
              collateralDeposit
            ).mul(BIG_NUMBER_DECIMALS.RYSK.div(BIG_NUMBER_DECIMALS.USDC));

            console.log("collateralDeposit: ", collateralDeposit);
            console.log("sharesWithdraw: ", sharesWithdraw);

            console.log("PPS:", BigNumber.from(ppsEpoch.value).toString());

            // Deposit / PPS = Number of Shares deposited
            const iShares = collateralDepositInRyskDecimals
              .div(BigNumber.from(ppsEpoch.value))
              .mul(BIG_NUMBER_DECIMALS.RYSK); // multiply back to RYSK (18) decimals

            console.log(
              "Number of shares deposited in this epoch: ",
              iShares.toString()
            );

            // calculated number of shares for collateral remove any withdrawn shares
            const s = iShares
              .sub(BigNumber.from(sharesWithdraw))
              .add(BigNumber.from(tempPNL[i - 1]?.shares || 0));

            console.log("New number of Shares: ", s.toString());

            const pnl = BigNumber.from(ppsEpoch.value) // current epoch PPS
              .sub(BigNumber.from(values[i - 1]?.value || 0)) // previous epoch PPS
              .mul(BigNumber.from(tempPNL[i - 1]?.shares || 0)) // previous epoch Shares
              .div(BIG_NUMBER_DECIMALS.RYSK) // RYSK (18) based
              .div(BIG_NUMBER_DECIMALS.RYSK.div(BIG_NUMBER_DECIMALS.USDC)); // now USDC (6) based

            const totalPNL = pnl.add(BigNumber.from(tempPNL[i - 1]?.pnl || 0));

            tempPNL.push({
              shares: s.toString(),
              change: BigNumber.from(collateralDeposit)
                .sub(sharesWithdrawAsCollateral)
                .toString(),
              pnl: totalPNL.toString(),
              timestamp: ppsEpoch.timestamp,
              dateLocale: dateLocale,
              epoch: ppsEpoch.id,
            });
          });

        const refinedDataByDate = tempPNL.reduce(
          (mapByDate: any, nextEpoch: any) => {
            const dateLocale = nextEpoch.dateLocale;

            if (!(dateLocale in mapByDate)) {
              mapByDate[dateLocale] = {
                ...nextEpoch,
                epoch: [nextEpoch.epoch],
              };
              return mapByDate;
            }

            // in case there is already same day We merge values

            const dateGroup = mapByDate[dateLocale];

            mapByDate[dateLocale] = {
              epoch: [...dateGroup.epoch, nextEpoch.epoch],
              // We keep the more recent pnl
              pnl:
                nextEpoch.timestamp > dateGroup.timestamp
                  ? nextEpoch.pnl
                  : dateGroup.pnl,
              // Sum share deposits
              shares: BigNumber.from(nextEpoch.shares)
                .add(BigNumber.from(dateGroup.shares))
                .toString(),
              // We keep latest timestamp
              timestamp: Math.max(nextEpoch.timestamp, dateGroup.timestamp),
              // It's the same day
              dateLocale,
            };

            return mapByDate;
          },
          {}
        );

        console.log("Refined Data By Date: ", refinedDataByDate);

        Object.keys(refinedDataByDate).length > 0 &&
          setHistoricalPNL(Object.values(refinedDataByDate));

        // tempPNL.length > 0 && setHistoricalPNL(tempPNL);
      },
    }
  );

  return (
    <div className="mb-24">
      <Card
        tabWidth={280}
        tabs={[
          {
            label: "RYSK.PnL",
            content: (
              <div className="pb-8 py-12 px-8 flex flex-col lg:flex-row h-full">
                <div className="flex h-full w-full justify-around">
                  <ResponsiveContainer width={"95%"} height={400}>
                    <LineChart
                      data={historicalPNL}
                      margin={{ top: 5, right: 40, bottom: 5, left: 20 }}
                    >
                      {/** TODO might want to show Line of user USDC position over epochs */}
                      <Line
                        type="monotone"
                        dataKey={({ pnl }) =>
                          utils.formatUnits(pnl, DECIMALS.USDC)
                        }
                        // TODO access color throw Tailwind helpers
                        stroke="black"
                        strokeWidth={2}
                        dot={false}
                      />
                      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                      <XAxis
                        type="number"
                        scale="time"
                        domain={["dataMin", "dataMax"]}
                        dataKey="timestamp"
                        angle={0}
                        tickFormatter={(value: string) => {
                          const date = new Date(parseInt(value) * 1000);
                          return date.toLocaleString("default", {
                            month: "short",
                            day: "2-digit",
                          });
                        }}
                      />
                      <YAxis />
                      <Tooltip content={<CustomTooltip />} />
                      <Legend verticalAlign="bottom" formatter={() => "PNL"} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            ),
          },
        ]}
      ></Card>
    </div>
  );
};

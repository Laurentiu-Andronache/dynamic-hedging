import { useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import { useNetwork } from "wagmi";

import PVFABI from "../../abis/AlphaPortfolioValuesFeed.json";
import ERC20ABI from "../../abis/erc20.json";
import LPABI from "../../abis/LiquidityPool.json";
import ORABI from "../../abis/OptionRegistry.json";
import PFABI from "../../abis/PriceFeed.json";
import addresses from "../../contracts.json";
import { useContract } from "../../hooks/useContract";
import { useGlobalContext } from "../../state/GlobalContext";
import { useOptionsTradingContext } from "../../state/OptionsTradingContext";
import {
  Option,
  OptionsTradingActionType,
  OptionType
} from "../../state/types";
import { ContractAddresses, ETHNetwork } from "../../types";
import { AlphaPortfolioValuesFeed } from "../../types/AlphaPortfolioValuesFeed";
import { ERC20 } from "../../types/ERC20";
import { LiquidityPool } from "../../types/LiquidityPool";
import { OptionRegistry } from "../../types/OptionRegistry";
import { PriceFeed } from "../../types/PriceFeed";
import { fromWei, toWei } from "../../utils/conversion-helper";
import {
  calculateOptionDeltaLocally,
  calculateOptionQuoteLocally,
  returnIVFromQuote
} from "../../utils/helpers";

const suggestedCallOptionPriceDiff = [-100, 0, 100, 200, 300, 400, 600, 800];
const suggestedPutOptionPriceDiff = [
  -800, -600, -400, -300, -200, -100, 0, 100,
];

export const OptionsTable = () => {
  const { chain } = useNetwork();

  const {
    state: { ethPrice },
  } = useGlobalContext();

  const [cachedEthPrice, setCachedEthPrice] = useState<number | null>(null);

  useEffect(() => {
    if (!cachedEthPrice && ethPrice) {
      setCachedEthPrice(Number((ethPrice / 100).toFixed(0)) * 100);
    }
  }, [ethPrice, cachedEthPrice]);

  const {
    state: { optionType, customOptionStrikes, expiryDate },
    dispatch,
  } = useOptionsTradingContext();

  const [suggestions, setSuggestions] = useState<Option[] | null>(null);

  const [liquidityPool] = useContract<any>({
    contract: "liquidityPool",
    ABI: LPABI,
  });

  const [optionRegistry] = useContract({
    contract: "OpynOptionRegistry",
    ABI: ORABI,
  });

  const [priceFeed] = useContract({
    contract: "priceFeed",
    ABI: PFABI,
  });

  const [portfolioValuesFeed] = useContract({
    contract: "portfolioValuesFeed",
    ABI: PVFABI,
  });

  const [usdc] = useContract({
    contract: "USDC",
    ABI: ERC20ABI,
  });

  useEffect(() => {
    if (cachedEthPrice && chain && liquidityPool) {
      const diffs =
        optionType === OptionType.CALL
          ? suggestedCallOptionPriceDiff
          : suggestedPutOptionPriceDiff;

      const strikes = [
        ...diffs.map<number>((diff) =>
          Number((cachedEthPrice + diff).toFixed(0))
        ),
        ...customOptionStrikes,
      ].sort((a, b) => a - b);

      const fetchPrices = async () => {
        const typedAddresses = addresses as Record<
          ETHNetwork,
          ContractAddresses
        >;
        const network = chain.network as ETHNetwork;
        const suggestions = await Promise.all(
          strikes.map(async (strike) => {
            const optionSeries = {
              expiration: Number(expiryDate?.getTime()) / 1000,
              strike: toWei(strike.toString()),
              isPut: optionType !== OptionType.CALL,
              strikeAsset: typedAddresses[network].USDC,
              underlying: typedAddresses[network].WETH,
              collateral: typedAddresses[network].USDC,
            };

            console.log({ optionSeries });

            const localQuote = await calculateOptionQuoteLocally(
              liquidityPool as LiquidityPool,
              optionRegistry as OptionRegistry,
              portfolioValuesFeed as AlphaPortfolioValuesFeed,
              usdc as ERC20,
              priceFeed as PriceFeed,
              optionSeries,
              toWei((1).toString()),
              true
            );

            const localDelta = await calculateOptionDeltaLocally(
              liquidityPool as LiquidityPool,
              priceFeed as PriceFeed,
              optionSeries,
              toWei((1).toString()),
              false
            );

            const iv = await returnIVFromQuote(
              localQuote,
              priceFeed as PriceFeed,
              optionSeries
            );

            console.log(iv);

            return {
              strike: strike,
              IV: iv * 100,
              delta: Number(fromWei(localDelta).toString()),
              price: localQuote,
              type: optionType,
            };
          })
        );
        setSuggestions(suggestions);
      };

      fetchPrices().catch(console.error);
    }
  }, [
    chain,
    cachedEthPrice,
    optionType,
    customOptionStrikes,
    expiryDate,
    liquidityPool,
    priceFeed,
    portfolioValuesFeed,
    optionRegistry,
    usdc,
  ]);

  const setSelectedOption = (option: Option) => {
    dispatch({ type: OptionsTradingActionType.SET_SELECTED_OPTION, option });
  };

  return (
    <table className="w-full bg-white">
      <thead className="text-left border-b-2 border-black">
        <tr>
          <th className="pl-4 py-2">Strike ($)</th>
          <th>IV</th>
          <th>Delta</th>
          <th className="pr-4">Price ($)</th>
        </tr>
      </thead>
      <tbody>
        {suggestions?.map((option, index) => (
          <tr
            className={`h-12 ${
              index % 2 === 0 ? "bg-gray-300" : ""
            } cursor-pointer`}
            onClick={() => setSelectedOption(option)}
            key={option.strike}
          >
            <td className="pl-4">{option.strike}</td>
            <td>
              <NumberFormat
                value={option.IV}
                displayType={"text"}
                decimalScale={2}
                suffix={"%"}
              />
            </td>
            <td>
              <NumberFormat
                value={option.delta}
                displayType={"text"}
                decimalScale={2}
              />
            </td>
            <td className="pr-4">
              <NumberFormat
                value={option.price}
                displayType={"text"}
                decimalScale={2}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

import { useMemo } from "react";
import { useContract } from "../hooks/useContract";
import LPABI from "../abis/LiquidityPool.json";
import { CHAINID, DHV_NAME, SCAN_URL } from "../config/constants";
import { useVaultContext } from "../state/VaultContext";
import { getClosestFridayToDate } from "../utils/getSuggestedExpiryDates";

export const VaultInfo = () => {
  const {
    state: { withdrawalEpoch },
  } = useVaultContext();

  const nextFriday = useMemo(() => getClosestFridayToDate(new Date()), []);

  const [lpContract] = useContract({
    contract: "liquidityPool",
    ABI: LPABI,
    readOnly: true,
  });

  const chainId =
    Number(process.env.REACT_APP_CHAIN_ID) === CHAINID.ARBITRUM_GOERLI
      ? CHAINID.ARBITRUM_GOERLI
      : CHAINID.ARBITRUM_MAINNET;

  return (
    <div className="pb-8 py-12 px-8">
      <div className="grid grid-cols-2">
        <div>
          <h4>{DHV_NAME}</h4>
          <p className="mt-4">Current Epoch: {withdrawalEpoch?.toString()}</p>
          <p className="mt-4">
            {/* TODO add next epoch start */}
            Next Epoch Start: {nextFriday.toDateString()} 11:00 UTC
          </p>
        </div>

        <div>
          <h4>Addresses</h4>
          <p className="mt-4">
            {DHV_NAME}:{" "}
            <a
              href={`${SCAN_URL[chainId]}/address/${lpContract?.address}`}
              target="blank"
              className="underline hover:font-medium"
            >
              {lpContract?.address}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

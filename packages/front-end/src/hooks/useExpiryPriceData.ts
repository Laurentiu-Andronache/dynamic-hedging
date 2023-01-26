import { gql, useQuery } from "@apollo/client";
import { useState } from "react";

interface OracleAsset {
  __typename: string;
  asset: {
    __typename: string;
    id: string;
    symbol: string;
    decimals: number;
  };
  pricer: {
    __typename: string;
    id: string;
    lockingPeriod: string;
    disputePeriod: string;
  };
  prices: {
    __typename: string;
    id: string;
    expiry: string;
    reportedTimestamp: string;
    isDisputed: boolean;
    price: string;
  }[];
}

interface OracleAssets {
  oracleAssets: OracleAsset[];
}

export function useExpiryPriceData() {
  const [allOracleAssets, setAllOracleAssets] = useState<OracleAsset[] | null>(
    null
  );

  const getOracleAssetsAndPricers = (data: OracleAssets) => {
    setAllOracleAssets(data.oracleAssets);
  };

  useQuery(
    gql`
      query {
        oracleAssets {
          asset {
            id
            symbol
            decimals
          }
          pricer {
            id
            lockingPeriod
            disputePeriod
          }
          prices(first: 1000) {
            id
            expiry
            reportedTimestamp
            isDisputed
            price
          }
        }
      }
    `,
    {
      onCompleted: getOracleAssetsAndPricers,
      onError: (err) => {
        console.log(err);
      },
      context: { clientName: "opyn" },
    }
  );

  return { allOracleAssets };
}

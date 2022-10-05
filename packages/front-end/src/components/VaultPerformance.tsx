import React, { useState } from "react";
import {VaultStats} from './VaultStats'
import {VaultChart} from './VaultChart'
import { AlphaBanner } from "./shared/AlphaBanner";
import { gql, useQuery } from "@apollo/client";
import moment from "moment";
import { ChartData } from "../types";

export const VaultPerformance = () => {


  const [cumulativeYield, setCumulativeYield] = useState(Number);
  const [historicalData, setHistoricalData] = useState<ChartData[] | null>(null);


  const getMetrics = (data: any) => {
    const cumulativeYield = data?.dailyStatSnapshots.find( (item: { id: string; }) => item.id === "last" )?.cumulativeYield
    const percentageCumulativeYield = Number(cumulativeYield) * 100
    setCumulativeYield( percentageCumulativeYield );
    
  };

  const getChartData = (data: any) => {

    const chartData = data?.dailyStatSnapshots.map( (item: { timestamp: any; cumulativeYield: any; }) => {
      return {
        date: moment.unix(Number(item.timestamp) ).format("DD-MMM-YY").toUpperCase(),
        cumulativeYield: Number(item.cumulativeYield * 100).toFixed(2),
      }
    })

    console.log(chartData)

    setHistoricalData(chartData)

  }

  useQuery(
    gql`
    query {
      dailyStatSnapshots(
        first: 1000
        orderBy: timestamp
        orderDirection: asc
        where: {timestamp_gte: 1664841600}
        ) {
        id
        cumulativeYield
        totalAssets
        totalReturns
        timestamp
      }
    }
  `,
    {
      onCompleted: (data) => {
        getMetrics(data)
        getChartData(data)
      },
      onError: (err) => {
        console.log(err);
      },
    }
  );


  return (
    <div>
      <div className="px-8 mt-8">
        <AlphaBanner />
      </div>
      <VaultStats cumulativeYield={Number(cumulativeYield)} />
      <VaultChart historicalData={historicalData} />
    </div>
  );
};

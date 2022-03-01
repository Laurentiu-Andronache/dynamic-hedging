import { BigNumberish, utils } from "ethers";
import BigNumber from 'bignumber.js'

export const formatEth = (x: BigNumberish) => Number(utils.formatEther(x));
export function truncate (num: number, places: number = 3): number {
    return Math.trunc(num * Math.pow(10, places)) / Math.pow(10, places);
}
export const tFormatEth = (x: BigNumberish): number => truncate(formatEth(x));
export const toWei = (x: string) => utils.parseEther(x);
export const call = 0, put = 1;
export const CALL = new BigNumber(call);
export const PUT =  new BigNumber(put);
export const SECONDS_IN_DAY = 86400;
export const SECONDS_IN_YEAR = SECONDS_IN_DAY * 365.25;
export const genOptionTime = (now: moment.Moment, future: moment.Moment) => (future.unix() - now.unix()) / SECONDS_IN_YEAR;
export const fromWei = (x: BigNumberish) => utils.formatEther(x);
export const fromUSDC = (x: BigNumberish) => utils.formatUnits(x, 6);
export const tFormatUSDC = (x: BigNumberish) => truncate(Number(fromUSDC(x)));
export const fmtExpiration = (x: number) => toWei(x.toString())
export const toUSDC = (x: string) => utils.parseUnits(x, 6);
export const toOpyn = (x: string) => utils.parseUnits(x, 8);
export const toWeiFromUSDC = (x: string) => utils.parseUnits(x, 12);
export const fromOpyn = (x: BigNumberish) => utils.formatUnits(x, 8);
export const getDiffSeconds = (now: moment.Moment, future: moment.Moment) => (future.unix() - now.unix());
export const convertRounded = (x: BigNumberish): number => Math.round(Number(x.toString()));
export const scaleNum = (x: string, decimals: number) => utils.parseUnits(x, decimals);
export const genOptionTimeFromUnix = (now: number, future: number) => (future - now) / SECONDS_IN_YEAR;
export const sample = (x: any[]): any => x[Math.floor(Math.random() * x.length)];
export const percentDiff = (a: number, b: number): number => a === b ? 0 : Math.abs(1 - a / b);
export const percentDiffArr = (a: (number|string)[], b: (number|string)[]): number => {
    const diffs = a.map((i: number|string, idx: number) => {
        let j = b[idx]
        return percentDiff(Number(i), Number(j))
    })
    const sum = diffs.reduce((a: number, b: number) => a + b, 0)
    return sum
}
export const createValidExpiry = (now: number, days: number) => {
    const multiplier = (now - 28800) / 86400
    return (Number(multiplier.toFixed(0)) + 1) * 86400 + days * 86400 + 28800
  }
export type BlackScholesCalcArgs = [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber];
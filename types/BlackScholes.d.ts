/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface BlackScholesInterface extends ethers.utils.Interface {
  functions: {
    "blackScholesCalc(bytes16,bytes16,bytes16,bytes16,bytes16,uint8)": FunctionFragment;
    "blackScholesCalcGreeks(bytes16,bytes16,bytes16,bytes16,bytes16,uint8)": FunctionFragment;
    "blackScholesEstimate(uint256,uint256,uint256)": FunctionFragment;
    "getDelta(uint256,uint256,uint256,uint256,uint256,uint8)": FunctionFragment;
    "getDeltaWei(uint256,uint256,uint256,uint256,uint256,uint8)": FunctionFragment;
    "retBasedBlackScholesEstimate(uint256[],uint256,uint256)": FunctionFragment;
    "retBlackScholesCalc(uint256,uint256,uint256,uint256,uint256,uint8)": FunctionFragment;
    "retBlackScholesCalcGreeks(uint256,uint256,uint256,uint256,uint256,uint8)": FunctionFragment;
    "sqrt(uint256)": FunctionFragment;
    "stddev(uint256[])": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "blackScholesCalc",
    values: [
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "blackScholesCalcGreeks",
    values: [
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "blackScholesEstimate",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getDelta",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getDeltaWei",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "retBasedBlackScholesEstimate",
    values: [BigNumberish[], BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "retBlackScholesCalc",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "retBlackScholesCalcGreeks",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(functionFragment: "sqrt", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "stddev",
    values: [BigNumberish[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "blackScholesCalc",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "blackScholesCalcGreeks",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "blackScholesEstimate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getDelta", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getDeltaWei",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "retBasedBlackScholesEstimate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "retBlackScholesCalc",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "retBlackScholesCalcGreeks",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sqrt", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stddev", data: BytesLike): Result;

  events: {};
}

export class BlackScholes extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: BlackScholesInterface;

  functions: {
    blackScholesCalc(
      price: BytesLike,
      strike: BytesLike,
      time: BytesLike,
      vol: BytesLike,
      rfr: BytesLike,
      flavor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "blackScholesCalc(bytes16,bytes16,bytes16,bytes16,bytes16,uint8)"(
      price: BytesLike,
      strike: BytesLike,
      time: BytesLike,
      vol: BytesLike,
      rfr: BytesLike,
      flavor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    blackScholesCalcGreeks(
      price: BytesLike,
      strike: BytesLike,
      time: BytesLike,
      vol: BytesLike,
      rfr: BytesLike,
      flavor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, string] & { quote: string; delta: string }>;

    "blackScholesCalcGreeks(bytes16,bytes16,bytes16,bytes16,bytes16,uint8)"(
      price: BytesLike,
      strike: BytesLike,
      time: BytesLike,
      vol: BytesLike,
      rfr: BytesLike,
      flavor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, string] & { quote: string; delta: string }>;

    blackScholesEstimate(
      _vol: BigNumberish,
      _underlying: BigNumberish,
      _time: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { estimate: BigNumber }>;

    "blackScholesEstimate(uint256,uint256,uint256)"(
      _vol: BigNumberish,
      _underlying: BigNumberish,
      _time: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { estimate: BigNumber }>;

    getDelta(
      price: BigNumberish,
      strike: BigNumberish,
      expiration: BigNumberish,
      vol: BigNumberish,
      rfr: BigNumberish,
      flavor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "getDelta(uint256,uint256,uint256,uint256,uint256,uint8)"(
      price: BigNumberish,
      strike: BigNumberish,
      expiration: BigNumberish,
      vol: BigNumberish,
      rfr: BigNumberish,
      flavor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getDeltaWei(
      price: BigNumberish,
      strike: BigNumberish,
      expiration: BigNumberish,
      vol: BigNumberish,
      rfr: BigNumberish,
      flavor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getDeltaWei(uint256,uint256,uint256,uint256,uint256,uint8)"(
      price: BigNumberish,
      strike: BigNumberish,
      expiration: BigNumberish,
      vol: BigNumberish,
      rfr: BigNumberish,
      flavor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    retBasedBlackScholesEstimate(
      _numbers: BigNumberish[],
      _underlying: BigNumberish,
      _time: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[void]>;

    "retBasedBlackScholesEstimate(uint256[],uint256,uint256)"(
      _numbers: BigNumberish[],
      _underlying: BigNumberish,
      _time: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[void]>;

    retBlackScholesCalc(
      price: BigNumberish,
      strike: BigNumberish,
      expiration: BigNumberish,
      vol: BigNumberish,
      rfr: BigNumberish,
      flavor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "retBlackScholesCalc(uint256,uint256,uint256,uint256,uint256,uint8)"(
      price: BigNumberish,
      strike: BigNumberish,
      expiration: BigNumberish,
      vol: BigNumberish,
      rfr: BigNumberish,
      flavor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    retBlackScholesCalcGreeks(
      price: BigNumberish,
      strike: BigNumberish,
      expiration: BigNumberish,
      vol: BigNumberish,
      rfr: BigNumberish,
      flavor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, string] & { quote: string; delta: string }>;

    "retBlackScholesCalcGreeks(uint256,uint256,uint256,uint256,uint256,uint8)"(
      price: BigNumberish,
      strike: BigNumberish,
      expiration: BigNumberish,
      vol: BigNumberish,
      rfr: BigNumberish,
      flavor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, string] & { quote: string; delta: string }>;

    sqrt(x: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;

    "sqrt(uint256)"(
      x: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    stddev(
      numbers: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { sd: BigNumber }>;

    "stddev(uint256[])"(
      numbers: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { sd: BigNumber }>;
  };

  blackScholesCalc(
    price: BytesLike,
    strike: BytesLike,
    time: BytesLike,
    vol: BytesLike,
    rfr: BytesLike,
    flavor: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "blackScholesCalc(bytes16,bytes16,bytes16,bytes16,bytes16,uint8)"(
    price: BytesLike,
    strike: BytesLike,
    time: BytesLike,
    vol: BytesLike,
    rfr: BytesLike,
    flavor: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  blackScholesCalcGreeks(
    price: BytesLike,
    strike: BytesLike,
    time: BytesLike,
    vol: BytesLike,
    rfr: BytesLike,
    flavor: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string, string] & { quote: string; delta: string }>;

  "blackScholesCalcGreeks(bytes16,bytes16,bytes16,bytes16,bytes16,uint8)"(
    price: BytesLike,
    strike: BytesLike,
    time: BytesLike,
    vol: BytesLike,
    rfr: BytesLike,
    flavor: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string, string] & { quote: string; delta: string }>;

  blackScholesEstimate(
    _vol: BigNumberish,
    _underlying: BigNumberish,
    _time: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "blackScholesEstimate(uint256,uint256,uint256)"(
    _vol: BigNumberish,
    _underlying: BigNumberish,
    _time: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getDelta(
    price: BigNumberish,
    strike: BigNumberish,
    expiration: BigNumberish,
    vol: BigNumberish,
    rfr: BigNumberish,
    flavor: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "getDelta(uint256,uint256,uint256,uint256,uint256,uint8)"(
    price: BigNumberish,
    strike: BigNumberish,
    expiration: BigNumberish,
    vol: BigNumberish,
    rfr: BigNumberish,
    flavor: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getDeltaWei(
    price: BigNumberish,
    strike: BigNumberish,
    expiration: BigNumberish,
    vol: BigNumberish,
    rfr: BigNumberish,
    flavor: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getDeltaWei(uint256,uint256,uint256,uint256,uint256,uint8)"(
    price: BigNumberish,
    strike: BigNumberish,
    expiration: BigNumberish,
    vol: BigNumberish,
    rfr: BigNumberish,
    flavor: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  retBasedBlackScholesEstimate(
    _numbers: BigNumberish[],
    _underlying: BigNumberish,
    _time: BigNumberish,
    overrides?: CallOverrides
  ): Promise<void>;

  "retBasedBlackScholesEstimate(uint256[],uint256,uint256)"(
    _numbers: BigNumberish[],
    _underlying: BigNumberish,
    _time: BigNumberish,
    overrides?: CallOverrides
  ): Promise<void>;

  retBlackScholesCalc(
    price: BigNumberish,
    strike: BigNumberish,
    expiration: BigNumberish,
    vol: BigNumberish,
    rfr: BigNumberish,
    flavor: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "retBlackScholesCalc(uint256,uint256,uint256,uint256,uint256,uint8)"(
    price: BigNumberish,
    strike: BigNumberish,
    expiration: BigNumberish,
    vol: BigNumberish,
    rfr: BigNumberish,
    flavor: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  retBlackScholesCalcGreeks(
    price: BigNumberish,
    strike: BigNumberish,
    expiration: BigNumberish,
    vol: BigNumberish,
    rfr: BigNumberish,
    flavor: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string, string] & { quote: string; delta: string }>;

  "retBlackScholesCalcGreeks(uint256,uint256,uint256,uint256,uint256,uint8)"(
    price: BigNumberish,
    strike: BigNumberish,
    expiration: BigNumberish,
    vol: BigNumberish,
    rfr: BigNumberish,
    flavor: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string, string] & { quote: string; delta: string }>;

  sqrt(x: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  "sqrt(uint256)"(
    x: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  stddev(
    numbers: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "stddev(uint256[])"(
    numbers: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    blackScholesCalc(
      price: BytesLike,
      strike: BytesLike,
      time: BytesLike,
      vol: BytesLike,
      rfr: BytesLike,
      flavor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "blackScholesCalc(bytes16,bytes16,bytes16,bytes16,bytes16,uint8)"(
      price: BytesLike,
      strike: BytesLike,
      time: BytesLike,
      vol: BytesLike,
      rfr: BytesLike,
      flavor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    blackScholesCalcGreeks(
      price: BytesLike,
      strike: BytesLike,
      time: BytesLike,
      vol: BytesLike,
      rfr: BytesLike,
      flavor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, string] & { quote: string; delta: string }>;

    "blackScholesCalcGreeks(bytes16,bytes16,bytes16,bytes16,bytes16,uint8)"(
      price: BytesLike,
      strike: BytesLike,
      time: BytesLike,
      vol: BytesLike,
      rfr: BytesLike,
      flavor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, string] & { quote: string; delta: string }>;

    blackScholesEstimate(
      _vol: BigNumberish,
      _underlying: BigNumberish,
      _time: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "blackScholesEstimate(uint256,uint256,uint256)"(
      _vol: BigNumberish,
      _underlying: BigNumberish,
      _time: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getDelta(
      price: BigNumberish,
      strike: BigNumberish,
      expiration: BigNumberish,
      vol: BigNumberish,
      rfr: BigNumberish,
      flavor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "getDelta(uint256,uint256,uint256,uint256,uint256,uint8)"(
      price: BigNumberish,
      strike: BigNumberish,
      expiration: BigNumberish,
      vol: BigNumberish,
      rfr: BigNumberish,
      flavor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getDeltaWei(
      price: BigNumberish,
      strike: BigNumberish,
      expiration: BigNumberish,
      vol: BigNumberish,
      rfr: BigNumberish,
      flavor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getDeltaWei(uint256,uint256,uint256,uint256,uint256,uint8)"(
      price: BigNumberish,
      strike: BigNumberish,
      expiration: BigNumberish,
      vol: BigNumberish,
      rfr: BigNumberish,
      flavor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    retBasedBlackScholesEstimate(
      _numbers: BigNumberish[],
      _underlying: BigNumberish,
      _time: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "retBasedBlackScholesEstimate(uint256[],uint256,uint256)"(
      _numbers: BigNumberish[],
      _underlying: BigNumberish,
      _time: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    retBlackScholesCalc(
      price: BigNumberish,
      strike: BigNumberish,
      expiration: BigNumberish,
      vol: BigNumberish,
      rfr: BigNumberish,
      flavor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "retBlackScholesCalc(uint256,uint256,uint256,uint256,uint256,uint8)"(
      price: BigNumberish,
      strike: BigNumberish,
      expiration: BigNumberish,
      vol: BigNumberish,
      rfr: BigNumberish,
      flavor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    retBlackScholesCalcGreeks(
      price: BigNumberish,
      strike: BigNumberish,
      expiration: BigNumberish,
      vol: BigNumberish,
      rfr: BigNumberish,
      flavor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, string] & { quote: string; delta: string }>;

    "retBlackScholesCalcGreeks(uint256,uint256,uint256,uint256,uint256,uint8)"(
      price: BigNumberish,
      strike: BigNumberish,
      expiration: BigNumberish,
      vol: BigNumberish,
      rfr: BigNumberish,
      flavor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, string] & { quote: string; delta: string }>;

    sqrt(x: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "sqrt(uint256)"(
      x: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    stddev(
      numbers: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "stddev(uint256[])"(
      numbers: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    blackScholesCalc(
      price: BytesLike,
      strike: BytesLike,
      time: BytesLike,
      vol: BytesLike,
      rfr: BytesLike,
      flavor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "blackScholesCalc(bytes16,bytes16,bytes16,bytes16,bytes16,uint8)"(
      price: BytesLike,
      strike: BytesLike,
      time: BytesLike,
      vol: BytesLike,
      rfr: BytesLike,
      flavor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    blackScholesCalcGreeks(
      price: BytesLike,
      strike: BytesLike,
      time: BytesLike,
      vol: BytesLike,
      rfr: BytesLike,
      flavor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "blackScholesCalcGreeks(bytes16,bytes16,bytes16,bytes16,bytes16,uint8)"(
      price: BytesLike,
      strike: BytesLike,
      time: BytesLike,
      vol: BytesLike,
      rfr: BytesLike,
      flavor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    blackScholesEstimate(
      _vol: BigNumberish,
      _underlying: BigNumberish,
      _time: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "blackScholesEstimate(uint256,uint256,uint256)"(
      _vol: BigNumberish,
      _underlying: BigNumberish,
      _time: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getDelta(
      price: BigNumberish,
      strike: BigNumberish,
      expiration: BigNumberish,
      vol: BigNumberish,
      rfr: BigNumberish,
      flavor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getDelta(uint256,uint256,uint256,uint256,uint256,uint8)"(
      price: BigNumberish,
      strike: BigNumberish,
      expiration: BigNumberish,
      vol: BigNumberish,
      rfr: BigNumberish,
      flavor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getDeltaWei(
      price: BigNumberish,
      strike: BigNumberish,
      expiration: BigNumberish,
      vol: BigNumberish,
      rfr: BigNumberish,
      flavor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getDeltaWei(uint256,uint256,uint256,uint256,uint256,uint8)"(
      price: BigNumberish,
      strike: BigNumberish,
      expiration: BigNumberish,
      vol: BigNumberish,
      rfr: BigNumberish,
      flavor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    retBasedBlackScholesEstimate(
      _numbers: BigNumberish[],
      _underlying: BigNumberish,
      _time: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "retBasedBlackScholesEstimate(uint256[],uint256,uint256)"(
      _numbers: BigNumberish[],
      _underlying: BigNumberish,
      _time: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    retBlackScholesCalc(
      price: BigNumberish,
      strike: BigNumberish,
      expiration: BigNumberish,
      vol: BigNumberish,
      rfr: BigNumberish,
      flavor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "retBlackScholesCalc(uint256,uint256,uint256,uint256,uint256,uint8)"(
      price: BigNumberish,
      strike: BigNumberish,
      expiration: BigNumberish,
      vol: BigNumberish,
      rfr: BigNumberish,
      flavor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    retBlackScholesCalcGreeks(
      price: BigNumberish,
      strike: BigNumberish,
      expiration: BigNumberish,
      vol: BigNumberish,
      rfr: BigNumberish,
      flavor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "retBlackScholesCalcGreeks(uint256,uint256,uint256,uint256,uint256,uint8)"(
      price: BigNumberish,
      strike: BigNumberish,
      expiration: BigNumberish,
      vol: BigNumberish,
      rfr: BigNumberish,
      flavor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    sqrt(x: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "sqrt(uint256)"(
      x: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    stddev(
      numbers: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "stddev(uint256[])"(
      numbers: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    blackScholesCalc(
      price: BytesLike,
      strike: BytesLike,
      time: BytesLike,
      vol: BytesLike,
      rfr: BytesLike,
      flavor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "blackScholesCalc(bytes16,bytes16,bytes16,bytes16,bytes16,uint8)"(
      price: BytesLike,
      strike: BytesLike,
      time: BytesLike,
      vol: BytesLike,
      rfr: BytesLike,
      flavor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    blackScholesCalcGreeks(
      price: BytesLike,
      strike: BytesLike,
      time: BytesLike,
      vol: BytesLike,
      rfr: BytesLike,
      flavor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "blackScholesCalcGreeks(bytes16,bytes16,bytes16,bytes16,bytes16,uint8)"(
      price: BytesLike,
      strike: BytesLike,
      time: BytesLike,
      vol: BytesLike,
      rfr: BytesLike,
      flavor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    blackScholesEstimate(
      _vol: BigNumberish,
      _underlying: BigNumberish,
      _time: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "blackScholesEstimate(uint256,uint256,uint256)"(
      _vol: BigNumberish,
      _underlying: BigNumberish,
      _time: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getDelta(
      price: BigNumberish,
      strike: BigNumberish,
      expiration: BigNumberish,
      vol: BigNumberish,
      rfr: BigNumberish,
      flavor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getDelta(uint256,uint256,uint256,uint256,uint256,uint8)"(
      price: BigNumberish,
      strike: BigNumberish,
      expiration: BigNumberish,
      vol: BigNumberish,
      rfr: BigNumberish,
      flavor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getDeltaWei(
      price: BigNumberish,
      strike: BigNumberish,
      expiration: BigNumberish,
      vol: BigNumberish,
      rfr: BigNumberish,
      flavor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getDeltaWei(uint256,uint256,uint256,uint256,uint256,uint8)"(
      price: BigNumberish,
      strike: BigNumberish,
      expiration: BigNumberish,
      vol: BigNumberish,
      rfr: BigNumberish,
      flavor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    retBasedBlackScholesEstimate(
      _numbers: BigNumberish[],
      _underlying: BigNumberish,
      _time: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "retBasedBlackScholesEstimate(uint256[],uint256,uint256)"(
      _numbers: BigNumberish[],
      _underlying: BigNumberish,
      _time: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    retBlackScholesCalc(
      price: BigNumberish,
      strike: BigNumberish,
      expiration: BigNumberish,
      vol: BigNumberish,
      rfr: BigNumberish,
      flavor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "retBlackScholesCalc(uint256,uint256,uint256,uint256,uint256,uint8)"(
      price: BigNumberish,
      strike: BigNumberish,
      expiration: BigNumberish,
      vol: BigNumberish,
      rfr: BigNumberish,
      flavor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    retBlackScholesCalcGreeks(
      price: BigNumberish,
      strike: BigNumberish,
      expiration: BigNumberish,
      vol: BigNumberish,
      rfr: BigNumberish,
      flavor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "retBlackScholesCalcGreeks(uint256,uint256,uint256,uint256,uint256,uint8)"(
      price: BigNumberish,
      strike: BigNumberish,
      expiration: BigNumberish,
      vol: BigNumberish,
      rfr: BigNumberish,
      flavor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    sqrt(
      x: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "sqrt(uint256)"(
      x: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    stddev(
      numbers: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "stddev(uint256[])"(
      numbers: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}

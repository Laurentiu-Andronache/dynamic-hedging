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
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IUniswapV1ExchangeInterface extends ethers.utils.Interface {
  functions: {
    "balanceOf(address)": FunctionFragment;
    "ethToTokenSwapInput(uint256,uint256)": FunctionFragment;
    "removeLiquidity(uint256,uint256,uint256,uint256)": FunctionFragment;
    "tokenToEthSwapInput(uint256,uint256,uint256)": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "ethToTokenSwapInput",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "removeLiquidity",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenToEthSwapInput",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "ethToTokenSwapInput",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenToEthSwapInput",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;

  events: {};
}

export class IUniswapV1Exchange extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IUniswapV1ExchangeInterface;

  functions: {
    balanceOf(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    "balanceOf(address)"(
      owner: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    ethToTokenSwapInput(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "ethToTokenSwapInput(uint256,uint256)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    removeLiquidity(
      arg0: BigNumberish,
      arg1: BigNumberish,
      arg2: BigNumberish,
      arg3: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "removeLiquidity(uint256,uint256,uint256,uint256)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      arg2: BigNumberish,
      arg3: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    tokenToEthSwapInput(
      arg0: BigNumberish,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "tokenToEthSwapInput(uint256,uint256,uint256)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    transferFrom(
      from: string,
      to: string,
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferFrom(address,address,uint256)"(
      from: string,
      to: string,
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

  "balanceOf(address)"(
    owner: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  ethToTokenSwapInput(
    arg0: BigNumberish,
    arg1: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "ethToTokenSwapInput(uint256,uint256)"(
    arg0: BigNumberish,
    arg1: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  removeLiquidity(
    arg0: BigNumberish,
    arg1: BigNumberish,
    arg2: BigNumberish,
    arg3: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "removeLiquidity(uint256,uint256,uint256,uint256)"(
    arg0: BigNumberish,
    arg1: BigNumberish,
    arg2: BigNumberish,
    arg3: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  tokenToEthSwapInput(
    arg0: BigNumberish,
    arg1: BigNumberish,
    arg2: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "tokenToEthSwapInput(uint256,uint256,uint256)"(
    arg0: BigNumberish,
    arg1: BigNumberish,
    arg2: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  transferFrom(
    from: string,
    to: string,
    value: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferFrom(address,address,uint256)"(
    from: string,
    to: string,
    value: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    "balanceOf(address)"(
      owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ethToTokenSwapInput(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "ethToTokenSwapInput(uint256,uint256)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeLiquidity(
      arg0: BigNumberish,
      arg1: BigNumberish,
      arg2: BigNumberish,
      arg3: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    "removeLiquidity(uint256,uint256,uint256,uint256)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      arg2: BigNumberish,
      arg3: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    tokenToEthSwapInput(
      arg0: BigNumberish,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "tokenToEthSwapInput(uint256,uint256,uint256)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferFrom(
      from: string,
      to: string,
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "transferFrom(address,address,uint256)"(
      from: string,
      to: string,
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    "balanceOf(address)"(
      owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ethToTokenSwapInput(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "ethToTokenSwapInput(uint256,uint256)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    removeLiquidity(
      arg0: BigNumberish,
      arg1: BigNumberish,
      arg2: BigNumberish,
      arg3: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "removeLiquidity(uint256,uint256,uint256,uint256)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      arg2: BigNumberish,
      arg3: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    tokenToEthSwapInput(
      arg0: BigNumberish,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "tokenToEthSwapInput(uint256,uint256,uint256)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    transferFrom(
      from: string,
      to: string,
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferFrom(address,address,uint256)"(
      from: string,
      to: string,
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    balanceOf(
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "balanceOf(address)"(
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ethToTokenSwapInput(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "ethToTokenSwapInput(uint256,uint256)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    removeLiquidity(
      arg0: BigNumberish,
      arg1: BigNumberish,
      arg2: BigNumberish,
      arg3: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "removeLiquidity(uint256,uint256,uint256,uint256)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      arg2: BigNumberish,
      arg3: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    tokenToEthSwapInput(
      arg0: BigNumberish,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "tokenToEthSwapInput(uint256,uint256,uint256)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    transferFrom(
      from: string,
      to: string,
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferFrom(address,address,uint256)"(
      from: string,
      to: string,
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}

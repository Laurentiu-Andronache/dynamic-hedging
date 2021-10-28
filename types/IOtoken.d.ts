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
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IOtokenInterface extends ethers.utils.Interface {
  functions: {
    "addAndSellETHCollateralOption(uint256,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addAndSellETHCollateralOption",
    values: [BigNumberish, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "addAndSellETHCollateralOption",
    data: BytesLike
  ): Result;

  events: {};
}

export class IOtoken extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IOtokenInterface;

  functions: {
    addAndSellETHCollateralOption(
      amtToCreate: BigNumberish,
      receiver: string,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "addAndSellETHCollateralOption(uint256,address)"(
      amtToCreate: BigNumberish,
      receiver: string,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;
  };

  addAndSellETHCollateralOption(
    amtToCreate: BigNumberish,
    receiver: string,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "addAndSellETHCollateralOption(uint256,address)"(
    amtToCreate: BigNumberish,
    receiver: string,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  callStatic: {
    addAndSellETHCollateralOption(
      amtToCreate: BigNumberish,
      receiver: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "addAndSellETHCollateralOption(uint256,address)"(
      amtToCreate: BigNumberish,
      receiver: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    addAndSellETHCollateralOption(
      amtToCreate: BigNumberish,
      receiver: string,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "addAndSellETHCollateralOption(uint256,address)"(
      amtToCreate: BigNumberish,
      receiver: string,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addAndSellETHCollateralOption(
      amtToCreate: BigNumberish,
      receiver: string,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "addAndSellETHCollateralOption(uint256,address)"(
      amtToCreate: BigNumberish,
      receiver: string,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;
  };
}

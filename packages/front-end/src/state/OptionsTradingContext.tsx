import type { PropsWithChildren } from "react";

import { createContext, useContext, useReducer } from "react";
import { optionsTradingReducer } from "./reducer";
import {
  OptionsTradingContext,
  OptionsTradingState,
  OptionType,
} from "./types";

export const defaultOptionTradingState: OptionsTradingState = {
  optionType: OptionType.CALL,
  expiryDate: null,
  optionParams: null,
  customOptionStrikes: [],
  selectedOption: null,
};

export const OptionsTradingReactContext = createContext<OptionsTradingContext>({
  state: defaultOptionTradingState,
  dispatch: () => {},
});

export const OptionsTradingProvider = ({
  children,
}: PropsWithChildren<unknown>) => {
  const [state, dispatch] = useReducer(
    optionsTradingReducer,
    defaultOptionTradingState
  );

  return (
    <OptionsTradingReactContext.Provider value={{ state, dispatch }}>
      {children}
    </OptionsTradingReactContext.Provider>
  );
};

export const useOptionsTradingContext = () =>
  useContext(OptionsTradingReactContext);

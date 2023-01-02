import React from "react";
import { Option } from "../../types";
import { Button } from "./Button";

type RadioButtonListProps<T> = {
  options: Option<T>[];
  selected: T | null;
  setSelected: (value: T) => void;
  predicate?: (arg: T) => boolean;
  removeOuterBorder?: boolean;
};

type RadioButtonListType<T = any> = React.FC<RadioButtonListProps<T>>;

export const RadioButtonList: RadioButtonListType = ({
  options,
  selected,
  setSelected,
  predicate,
  removeOuterBorder = false,
}) => {
  return (
    <div className={`flex w-full pr-[2px]`}>
      {options.map((option, index) => {
        const isSelected = predicate
          ? predicate(option.value)
          : option.value === selected;
        return (
          <Button
            key={option.key}
            className={`${
              isSelected ? "" : "!bg-gray-500"
            } basis-0 h-12 border-0 grow mr-[-2px] ${
              removeOuterBorder ? "border-y-0" : ""
            }`}
            onClick={() => setSelected(option.value)}
          >
            {option.label}
          </Button>
        );
      })}
    </div>
  );
};

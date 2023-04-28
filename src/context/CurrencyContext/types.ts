import { ReactNode } from "react";
import { SingleValue } from "react-select";

interface Option {
  value: string;
  label: string;
}

interface CurrencyContextState {
  options: Option[]; 
  option: Option;
  handleTips: (event: SingleValue<Option>) => void;
  currency: string;
}

interface CurrencyContextProviderProps {
  children: ReactNode;
}

export type { Option, CurrencyContextState, CurrencyContextProviderProps };

import { ReactNode } from "react";

interface BudgetContextState {
  budget: number;
  addBudget: (budget: number) => void;
}
interface BudgetContextProviderProps {
  children: ReactNode;
}
export type { BudgetContextState, BudgetContextProviderProps };

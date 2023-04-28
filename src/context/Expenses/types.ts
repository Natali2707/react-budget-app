import { ReactNode } from "react";

export interface Expense {
  id: string;
  name: string;
  cost: string;
}
export interface ExpensesContextState {
  expenses: Expense[];
  deleteExpense: (id: string) => void;
  addExpense: (expense: Expense) => void;
}

export interface ExpensesContextProviderProps {
  children: ReactNode;
}

import { ReactNode } from "react";

export interface Expense {
  id: string;
  name: string;
  cost: string;
}
// interface ExpensesContextState {
//     expenses: any[],  // expenses-расходы
//     deleteExpense: (id: string) => void,
// } было , преобразуем:

export interface ExpensesContextState {
  expenses: Expense[]; // expenses-расходы
  deleteExpense: (id: string) => void;
  addExpense: (expense: Expense) => void;
}

export interface ExpensesContextProviderProps {
  children: ReactNode;
}

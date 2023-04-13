import { ReactNode } from "react";

export interface Expense {
  id: number;
  name: string;
  cost: number;
}
// interface ExpensesContextState {
//     expenses: any[],  // expenses-расходы
//     deleteExpense: (id: number) => void,
// } было , преобразуем:

export interface ExpensesContextState {
  expenses: Expense[]; // expenses-расходы
  deleteExpense: (id: number) => void;
  addExpense: (expense: Expense) => void;
}

export interface ExpensesContextProviderProps {
  children: ReactNode;
}

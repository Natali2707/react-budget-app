import { createContext, useContext, useState } from "react";
import { Expense, ExpensesContextProviderProps, ExpensesContextState } from "./types";


const ExpenseContext = createContext<ExpensesContextState>({} as ExpensesContextState);

export const useExpensesContextValue = () => {
    const [expensesValue, setExpensesValue] = useState<ExpensesContextState>(() => {
        return {
            expenses: [
                {
                    id: "1",
                    name: "shopping",
                    cost: "100",
                },
                {
                    id: "2",
                    name: "drinking",
                    cost: "200",
                },
                {
                    id: "3",
                    name: "relax",
                    cost: "500",
                },
                {
                    id: "4",
                    name: "study",
                    cost: "400",
                }
            ],
            deleteExpense: (id: string) => {
                setExpensesValue(ctx => ({
                    ...ctx,
                    expenses: ctx.expenses.filter((exp) => exp.id !== id)
                }))
            },
            addExpense: (expense: Expense) => {
                setExpensesValue((ctx) => ({
                    ...ctx,
                    expenses: [...ctx.expenses, expense] // в ключ экспенсис возьми дополнит
                    // значение кот есть и добавь еще в конец массива дополнительно 1 объект 
                }))
            }
        };
    })
    return expensesValue;
}

export const useExpensesContext = () => useContext(ExpenseContext);

export const ExpensesContextProvider = ({ children }: ExpensesContextProviderProps) => {
    return <ExpenseContext.Provider value={useExpensesContextValue()}>
        {children}</ExpenseContext.Provider>
};

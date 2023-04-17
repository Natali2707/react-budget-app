import { createContext, useContext, useState } from "react";
import { Expense, ExpensesContextProviderProps, ExpensesContextState } from "./types";


// const ExpenseContext = createContext<ExpensesContextState>({
//     expenses: [],
// });  

//ИЛИ ОПТИМИЗИРУЕМ:
const ExpenseContext = createContext<ExpensesContextState>({} as ExpensesContextState);
//1. мы вызвали ф-ю  createContext, кот Создаёт некоторый объект ExpenseContext (Context), этот
// объект ExpenseContext под капотом содержит провайдеры и консьюмеры.
// 4.Нам надо протипизировать createContext, нужно связать типизацию контекста с типизацией стейта:
//5.({} as ExpensesContextState) это пустой объект.Говорим: создай нам пустой объукт 

//3. создаем свой КАСТОМНЫЙ хук useExpensesContextValue,который равняется ф-ции,
//  где ф-я б содержать и хранить данные нашего контекста и вычислять эти данные:
const useExpensesContextValue = () => {
    //наш юсстэйт хранит (expenses: Expense) значения
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
    }) //наш стэйт б содержать контекст
    return expensesValue;
}

// 6. созд свой соб хук, кот вызывает хук useContext и берет контекст отсюда:(ExpenseContext)
export const useExpensesContext = () => useContext(ExpenseContext);

//2. создаем компонент, который б нашим провайдером, он всегда принимает каких-то чилдренов
//  и возвр-ет нам объект ExpenseContext,
// у которого мы достаем компонент провайдер и который д иметь какие-то значения value, эти знач-я
//  мы получаем при вызове кастом хука useExpensesContextValue:
export const ExpensesContextProvider = ({ children }: ExpensesContextProviderProps) => {
    return <ExpenseContext.Provider value={useExpensesContextValue()}>
        {children}</ExpenseContext.Provider>
    //ExpenseContext.Provider б обращаться к свойству контекста и забирать у него провайдер,
    //  который б отвечать за все наши значения
};

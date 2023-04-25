import { createContext, useContext, useState } from "react";
import { BudgetContextProviderProps, BudgetContextState } from "./types";

const BudgetContext = createContext<BudgetContextState>({} as BudgetContextState);

export const useBudgetContextValue = () => {
    const [budgetValue, setBudgetValue] = useState<BudgetContextState>(() => {
        return {
            budget: 5000,
            addBudget: (budget: number) => {
                setBudgetValue((ctx) => ({
                    ...ctx,
                    budget: budget,
                }));
            },
        };
    });
    return budgetValue;
};
export const useBudgetContext = () => useContext(BudgetContext);
export const BudgetContextProvider = ({ children }: BudgetContextProviderProps) => {
    return <BudgetContext.Provider value={useBudgetContextValue()}>{children}
    </BudgetContext.Provider>
}

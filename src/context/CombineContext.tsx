import React, { FC, ReactNode } from "react";
import {
    ExpensesContextProvider, CurrencyContextProvider, BudgetContextProvider
} from "./index";

interface CombineComponentsProps {
    children: ReactNode;
}

export const combineComponents = (...components: FC<CombineComponentsProps>[]) => {
    return components.reduce(
        (AccumulatedComponents, CurrentComponent) =>
            ({ children }: CombineComponentsProps) =>
            (
                <AccumulatedComponents>
                    <CurrentComponent>{children}</CurrentComponent>
                </AccumulatedComponents>
            ),
    );
};



const providers = [
    BudgetContextProvider,
    CurrencyContextProvider,
    ExpensesContextProvider
]
export const AppContextProvider = combineComponents(...providers);
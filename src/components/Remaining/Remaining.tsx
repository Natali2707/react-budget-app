import React, { useEffect, useState } from "react"
import { StyledInfo, StyledRemain } from "./styles"
import { useBudgetContext, useCurrenciesContext, useExpensesContext } from "context";



export const Remain = () => {
    const { expenses } = useExpensesContext();
    const { currency } = useCurrenciesContext();
    const { budget } = useBudgetContext();

    const remaining = budget - expenses.reduce((spent, expense) => spent + Number(expense.cost), 0);

    const isOverBudget = remaining < 0;
    return (
        <StyledRemain isOverBudget={isOverBudget}>
            <StyledInfo isOverBudget={isOverBudget}>
                {isOverBudget
                    ? `Overspending by ${currency}${Math.abs(remaining)}`
                    : `Remaining: ${currency}${remaining}`}
            </StyledInfo>
        </StyledRemain>
    )
}

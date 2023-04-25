import React from "react"
import { StyledRemain } from "./styles"
import { useCurrenciesContext, useExpensesContext } from "context";

export const Remain = () => {
    const { expenses } = useExpensesContext();
    const { currency } = useCurrenciesContext()

    // const remaining=
    // budget-expenses.reduce((total, {cost})=>total+cost, 0);
    return (
        <StyledRemain> Remaining: {currency} 2000</StyledRemain>
    )
}

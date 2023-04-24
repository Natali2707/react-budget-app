import React from "react"
import { StyledRemain } from "./styles"
import { useExpensesContext } from "context";

export const Remain = () => {
    const { expenses } = useExpensesContext();

    // const remaining=
    // budget-expenses.reduce((total, {cost})=>total+cost, 0);
    return (
        <StyledRemain> Remaining: $2000</StyledRemain>
    )
}

import { Expense, useCurrenciesContext, useExpensesContext } from "context";
import { StyleBadge } from "./styles";

export interface ExpenseBadgeProps {
    expense: Expense,
}

export const Badge = ({ expense }: ExpenseBadgeProps) => {
    const { deleteExpense } = useExpensesContext();
    const { currency } = useCurrenciesContext()
    return (
        <StyleBadge > {currency} {expense.cost}</StyleBadge>
    )
}

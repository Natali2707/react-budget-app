import { Expense, useCurrenciesContext, useExpensesContext } from "context";
import { StyledExpensesItem } from "./styles";
import { Badge } from "components";
import { CloseButtonImg } from "assets";

export interface ExpenseItemProps {
    expense: Expense,
}

export const ExpenseItem = ({ expense }: ExpenseItemProps) => {
    const { deleteExpense } = useExpensesContext();
    const { currency } = useCurrenciesContext()
    return (
        <StyledExpensesItem key={expense.name}>
            <p> {expense.name}</p>
            <p> <Badge expense={expense} /></p>
            <div onClick={() => deleteExpense(expense.id)}><CloseButtonImg /></div>
        </StyledExpensesItem>

    )
}

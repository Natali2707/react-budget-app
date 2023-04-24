import { useCurrenciesContext } from "context";
import { useExpensesContext } from "../../context/Expenses/Expenses"
import { Expense } from "../../context/Expenses/types";
import { CloseButtonImg } from "../CloseButtonImg/CloseButtonImg";
// import { ReactComponent as CloseButtonImg } from "../../assets/icons/close.svg";
import { StyledExpensesItem } from "./styles";

export interface ExpenseItemProps {
    expense: Expense,
}

export const ExpenseItem = ({ expense }: ExpenseItemProps) => {
    const { deleteExpense } = useExpensesContext();
    const { currency } = useCurrenciesContext()
    return (
        <StyledExpensesItem key={expense.name}>
            <p> {expense.name}</p>
            <p> {currency} {expense.cost}</p>
            <div onClick={() => deleteExpense(expense.id)}><CloseButtonImg /></div>
        </StyledExpensesItem>

    )
}

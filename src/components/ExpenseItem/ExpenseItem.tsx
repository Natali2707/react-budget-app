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
    return (
        <StyledExpensesItem >
            {/* <StyledExpensesItem key={expense.id}> */}
            <p> {expense.name}</p>
            <p>$ {expense.cost}</p>
            <div onClick={() => deleteExpense(expense.id)}><CloseButtonImg /></div>

        </StyledExpensesItem>

    )
}

import { Expense } from "../../context/Expenses/types"
import { ExpenseItem } from "../ExpenseItem/ExpenseItem"



export const ExpenseList = (expense: Expense) => {
    return (
        <ExpenseItem expense={expense} key={expense.id} />
    )
}

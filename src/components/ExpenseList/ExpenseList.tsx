import { ExpenseItem } from "components";
import { useExpensesContext } from "context";
import { useDebounce } from "hooks/useDebounce";

export const ExpensesList = () => {
    const { expenses } = useExpensesContext();
    console.log(expenses);
    const useExpenseDebounce = useDebounce(expenses);
    return (
        <div>
            <h2>Expenses</h2>
            {
                useExpenseDebounce.map((expense) => {
                    return <ExpenseItem key={expense.id} expense={expense} />
                })}</div>
    )
}

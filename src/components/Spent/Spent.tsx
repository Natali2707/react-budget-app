import { useCurrenciesContext, useExpensesContext } from "context";
import { StyledSpent } from "./styles";

export const Spent = () => {
    const { currency } = useCurrenciesContext();
    const { expenses } = useExpensesContext();

    const spent = expenses.reduce((spent, expense) => spent + Number(expense.cost), 0);

    return (
        <StyledSpent>Spent so far: {currency}{spent}</StyledSpent>
    )
}

import { SelectCurrency } from "components/Select/Select";
import { Head } from "./styles";
import { Budget, Remain, Spent } from "components";

export const BudgetApp = () => {
    return (
        <>
            <Head>
                <h2>Budget App</h2>
                <SelectCurrency />
            </Head>
            <Budget />
            <Remain />
            <Spent />
        </>
    )
}

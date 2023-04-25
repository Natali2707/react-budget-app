import { SelectCurrency } from "components/Select/Select";
import { Head } from "./styles";
import { Badget, Remain, Spent } from "components";

export const BadgetApp = () => {
    return (
        <>
            <Head>
                <h2>Budget App</h2>
                <SelectCurrency />
            </Head>
            <Badget />
            <Remain />
            <Spent />
        </>
    )
}

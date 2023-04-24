import { SelectCurrency } from "components/Select/Select"
import { Badget } from "../Badget/Badget"
import { Remain } from "../Remain/Remain"
import { Spent } from "../Spent/Spent"
import { Head } from "./styles"

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

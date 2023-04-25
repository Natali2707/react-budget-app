import { useBudgetContext, useCurrenciesContext } from "context";
import { Edit, StyledBadget } from "./styles";


export const Badget = () => {
    const { currency } = useCurrenciesContext()
    const { budget } = useBudgetContext()
    return (
        <StyledBadget >Budget: {currency} {budget} <p><Edit>Edit</Edit></p></StyledBadget >
    )
}

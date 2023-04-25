import { useCurrenciesContext } from "context";
import { Edit, StyledBadget } from "./styles";

export const Badget = () => {
    const { currency } = useCurrenciesContext()
    return (
        <StyledBadget >Budget: {currency}3000 <p><Edit>Edit</Edit></p></StyledBadget >
    )
}

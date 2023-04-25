import { useCurrenciesContext } from "context";
import { StyledSpent } from "./styles";

export const Spent = () => {
    const { currency } = useCurrenciesContext()
    return (
        <StyledSpent>Spent so far: {currency}1000</StyledSpent>
    )
}

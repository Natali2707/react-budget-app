import { useCurrenciesContext } from "context";
import { StyledBadge } from "./styles";

export const Badget = () => {
    const { currency } = useCurrenciesContext()
    return (
        <StyledBadge >Budget: {currency}3000</StyledBadge >
    )
}

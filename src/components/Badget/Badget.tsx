import { useCurrenciesContext } from "context";
import { SelectCurrency } from "../Select/Select";
import { StyledBadge } from "./styles";

export const Badget = () => {
    const { currency } = useCurrenciesContext()
    return (
        <>
            
            {/* <SelectCurrency options={options} setTips={handleTips} defaultValue={curency} /> */}
            <StyledBadge >Budget: {currency}3000</StyledBadge >
        </>

    )
}

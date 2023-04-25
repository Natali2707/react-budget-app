import { useCurrenciesContext } from "context";
import Select from "react-select";

export const SelectCurrency = () => {
    const { options, option, handleTips } = useCurrenciesContext();
    return (
        <Select options={options} defaultValue={option} onChange={handleTips}
        />
    )
}
export { Select };


import { useCurrenciesContext } from "context";
import React from "react";
import Select from "react-select";

export const SelectCurrency = () => {
    const { options, option, handleTips } = useCurrenciesContext();
    return (
        <Select options={options} defaultValue={option} onChange={handleTips}
        />
    )
}

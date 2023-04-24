import { createContext, useContext, useState } from "react";
import { CurrencyContextProviderProps, CurrencyContextState, Option } from "./types";
import { SingleValue } from "react-select";

enum Currency {
    USD = "$",
    EUR = "€",
    GBP = "£",
    CNY = "¥",
}

const options: Option[] = [
    { value: Currency.USD, label: "USD" },
    { value: Currency.EUR, label: "EUR" },
    { value: Currency.GBP, label: "GBP" },
    { value: Currency.CNY, label: "CNY" }
];


const CurrencyContext = createContext<CurrencyContextState>({} as CurrencyContextState)

//  создаем свой КАСТОМНЫЙ хук:
export const useCurrencyContextValue = () => {

    const [currencyValue, setCurrencyValue] = useState<CurrencyContextState>(() => {
        return {
            options: options,
            option: options[0],
            currency: options[0].value,
            handleTips: (event: SingleValue<Option>) => {
                if (event) {
                    setCurrencyValue((ctx) => ({
                        ...ctx,
                        option: event,
                        currency: event.value
                    }));
                }
            },
        };
    });
    return currencyValue;
};

// созд свой соб хук, кот вызывает хук useContext и берет контекст из (CurrencyContext)
export const useCurrenciesContext = () => useContext(CurrencyContext);
export const CurrencyContextProvider = ({ children }: CurrencyContextProviderProps) => {
    return <CurrencyContext.Provider value={useCurrencyContextValue()}>
        {children}</CurrencyContext.Provider>
}
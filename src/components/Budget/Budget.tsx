import { useBudgetContext, useCurrenciesContext } from "context";
import { BudgetButtonSave, Edit, StyledBudget, StyledInput } from "./styles";
import { ChangeEvent, useState } from "react";
import { useToggle } from "hooks/useToogle";


export const Budget = () => {
    const { currency } = useCurrenciesContext();
    const { budget, addBudget } = useBudgetContext();
    const [isEdit, setIsEdit] = useToggle(true);

    const [inputValue, setInputValue] = useState<number>(0);

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(+e.target.value);
    };

    const handleSave = () => {
        setIsEdit(isEdit);
        addBudget(inputValue);
    };

    return (
        <StyledBudget >
            {isEdit ? (
                <>
                    <StyledInput type="number" onChange={handleInput}
                        placeholder="Enter budget ..." />
                    <BudgetButtonSave onClick={handleSave}>Save</BudgetButtonSave >
                </>
            ) : (
                <>
                    Budget: {currency} {budget}
                    <p><Edit onClick={setIsEdit}>Edit</Edit></p>
                </>
            )}
        </StyledBudget >
    )
}

import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { StyledButton, StyledForm, StyledInput } from "./styles";
import { useExpensesContext } from "context";
import { v4 as uuidv4 } from "uuid";

type UserFormValues = {
  id: string;
  name: string;
  cost: string;
}

export const Form = () => {
  const { addExpense } = useExpensesContext();
  const { register, handleSubmit,
    reset, control, formState: { errors } } = useForm<UserFormValues>();
  const onSubmit: SubmitHandler<UserFormValues> = (data) => {

    addExpense({ ...data, id: uuidv4(), })
    reset();
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <h2>Add Expense</h2>
      <Controller
        render={({ field }) =>
          <StyledInput type="text"
            {...register("name", {
              required: true, maxLength: 15,
              pattern: /[A-Za-z|А-Яа-я]+$/i
            })}
            placeholder="enter name ..." />}
        name="name"
        control={control}
        defaultValue=""
      />
      {errors.name?.type === "maxLength" && (
        <p role="alert" style={{ color: "red" }}>
          Проверь правильность ввода: символов не более 15
        </p>
      )}
      {errors.name?.type === "pattern" && (
        <p role="alert" style={{ color: "red" }}>
          Проверь правильность ввода:
          вводить только буквы [Aa-Zz] или [А-Яа-я]
        </p>
      )}
      <Controller
        render={({ field }) => <StyledInput type="text"
          {...register("cost", { required: true, maxLength: 5, pattern: /^[0-9]+$/i })}
          placeholder="enter cost ..." />}
        name="cost"
        control={control}
      />
      {errors.cost?.type === "maxLength" && (
        <p role="alert" style={{ color: "red" }}>
          Проверь правильность ввода: символов не более 5
        </p>
      )}
      {errors.cost?.type === "pattern" && (
        <p role="alert" style={{ color: "red" }}>
          Проверь правильность ввода:
          вводить только цифры от 0 до 9
        </p>
      )}
      <StyledButton type="submit">Done</StyledButton>
    </StyledForm>
  )
}


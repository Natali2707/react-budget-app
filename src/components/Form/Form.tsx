
import { useForm } from "react-hook-form"
import { StyledButton, StyledForm, StyledInput } from "./styles";

export const Form = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (d: any) =>
    alert(JSON.stringify(d));
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <h2>Add Expense</h2>
      <label>
        <StyledInput {...register("firstName")} placeholder="enter name ..." />
      </label>
      <label>
        <StyledInput {...register("lastName")} placeholder="enter cost ..." />
      </label>
      <StyledButton>Done</StyledButton>
    </StyledForm>
  )
}

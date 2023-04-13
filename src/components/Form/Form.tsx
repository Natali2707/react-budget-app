import { SubmitHandler, useForm } from "react-hook-form";
import { StyledButton, StyledForm, StyledInput } from "./styles";
import { useExpensesContext } from "../../context/Expenses/Expenses";
import { v4 as uuidv4 } from "uuid";

type UserFormValues = {
  id: number;
  name: string;
  cost: number;
}

//handleSubmit -ф-я для связывания, reset для очистки полей инпутов
export const Form = () => {
  const { addExpense } = useExpensesContext();
  const { register, handleSubmit, reset } = useForm<UserFormValues>();
  const onSubmit: SubmitHandler<UserFormValues> = (data) => {
    // !!!!!!   !!!!!!    тоже самое:
    // const onSubmit = (data: UserFormValues): void => {
    // alert(JSON.stringify(d));
    // console.log(data);
    // console.log(addExpense({ ...data, id: + uuidv4(), }));
    addExpense({ ...data, id: + uuidv4(), })
    reset();
  }

  // const { register, handleSubmit } = useForm();
  // const onSubmit = (d: any) =>
  //   alert(JSON.stringify(d));
  //на форму мы вешаем событие onSubmit, когда б происходить событие onSubmit (когда мы нажмем 
  //на button отправки с типом type="submit"), тогда и вызывается ф-ция {handleSubmit}:
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <h2>Add Expense</h2>
      <StyledInput type="text" {...register("name", { required: true })}  {...register("name", {
        maxLength: 15
      })} placeholder="enter name ..." />
      <StyledInput type="number" {...register("cost", { required: true })} {...register("cost", {
        maxLength: 5
      })} placeholder="enter cost ..." />
      <StyledButton type="submit">Done</StyledButton>
    </StyledForm>
  )
}
function createId(): any {
  throw new Error("Function not implemented.");
}


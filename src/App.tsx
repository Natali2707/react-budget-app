import { Container } from "./UI/base"
import { BudgetApp, ExpensesList, Form } from "components";

export const App = () => {
  return (
    <Container>
      <BudgetApp />
      <ExpensesList />
      <Form />
    </Container>
  )
}

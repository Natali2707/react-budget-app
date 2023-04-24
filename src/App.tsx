import { Container } from "./UI/base"
// import { Badge } from "./components/Badge/Badge"
// import { Remain } from "./components/Remain/Remain"
// import { Spent } from "./components/Spent/Spent"
import { BadgetApp, ExpensesList, Form } from "components";

export const App = () => {
  return (
    <>
      <Container>
        <BadgetApp />
        <ExpensesList />
        <Form />
      </Container>
    </>
  )
}

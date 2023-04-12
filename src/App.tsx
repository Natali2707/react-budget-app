import React from "react"
import { ExpensesList } from "./components/ExpensesList"
import { Form } from "./components/Form/Form"
import { Container } from "./UI/base"

export const App = () => {
  return (
    <div>
      <Container>
        <ExpensesList />
        <Form />
      </Container>

    </div>
  )
}

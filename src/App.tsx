import React from "react"
import { ExpensesList } from "./components/ExpensesList"
import { Form } from "./components/Form/Form"
import { Container } from "./UI/base"
import { Badge } from "./components/Badge/Badge"
import { Remain } from "./components/Remain/Remain"
import { Spent } from "./components/Spent/Spent"

export const App = () => {
  return (
    <div>
      <Container>
        <Badge />
        <Remain />
        <Spent />
        <ExpensesList />
        <Form />
      </Container>

    </div>
  )
}

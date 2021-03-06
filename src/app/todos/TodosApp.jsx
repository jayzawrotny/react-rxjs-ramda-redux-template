import React from "react"
import styled from "styled-components"

import Todos from "./containers/Todos"
import Link from "app/main/components/Link"

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
`

export default function TodosApp (props) {
  return (
    <section className="todos-app">
      <Title>
        R5 Todos App
      </Title>
      <Todos />
      <Link href="/todo/5">Home</Link>
    </section>
  )
}

TodosApp.displayName = "TodosApp"

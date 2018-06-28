import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"
import TodoList from './components/TodoList'

const client = new ApolloClient({
  uri: "https://api.graph.cool/simple/v1/cjiughmid738b0118bts2u64f"
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <TodoList />
  </ApolloProvider>
, document.getElementById('root'))

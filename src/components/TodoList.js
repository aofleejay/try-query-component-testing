import React, { Fragment } from 'react'
import { Query, Mutation } from "react-apollo"
import gql from "graphql-tag"

export const GET_ALL_TODOES = gql`
  query allTodoes {
    allTodoes {
      id
      content
    }
  }
`

export const CREATE_TODO = gql`
  mutation createTodo($content: String!, $isDone: Boolean!) {
    createTodo(content: $content, isDone: $isDone) {
      id
      content
    }
  }
`

const TodoList = (props) => (
  <Fragment>
    <Query query={GET_ALL_TODOES}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error :(</p>

        return data.allTodoes.map(({ id, content }) => (
          <div key={id}>
            <p>{content}</p>
          </div>
        ))
      }}
    </Query>
    <Mutation mutation={CREATE_TODO}>
      {(createTodo, { data }) => (
        <form
          onSubmit={(e) => {
            e.preventDefault()
            createTodo({
              variables: { content: e.target.text.value, isDone: false },
              refetchQueries: [{ query: GET_ALL_TODOES }],
            })
          }}
        >
          <input id="text" type="text" name="text" />
          <button id="submit" type="submit">Add Todo</button>
        </form>
      )}
    </Mutation>
  </Fragment>
)

export default TodoList

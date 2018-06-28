import React from 'react'
import { graphql } from "react-apollo"
import gql from "graphql-tag"

export const GET_ALL_TODOES = gql`
  query allTodoes {
    allTodoes {
      id
      content
    }
  }
`

const TodoHOC = (props) => {
  const { loading, error, allTodoes } = props.data
  
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    allTodoes.map(({ id, content }) => (
      <div key={id}>
        <p>{content}</p>
      </div>
    ))
  )
}

export default graphql(GET_ALL_TODOES)(TodoHOC)

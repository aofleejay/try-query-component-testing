import React from 'react'
import { MockedProvider } from 'react-apollo/test-utils'
import { mount } from 'enzyme'
import waait from 'waait'
import TodoList, { GET_ALL_TODOES } from './TodoList'

describe('Test TodoList component', () => {
  it('Should contain loading ui when promise is pending', () => {
    const wrapper = mount(
      <MockedProvider mocks={[]} addTypename={false}>
        <TodoList />
      </MockedProvider>,
    )
  
    expect(wrapper).toMatchSnapshot()
  })

  it('Should contain response when promise has resolved', async () => {
    const mocks = [
      {
        request: {
          query: GET_ALL_TODOES,
        },
        result: {
          data: {
            allTodoes: [
              {
                id: 'cjiugybsw23z8019717p0cgwb',
                content: 'Write a blog',
              },
              {
                id: 'cjiugyxca23zc0197lxs4uh29',
                content: 'Practice guitar',
              },
            ],
          },
        },
      },
    ]

    const wrapper = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <TodoList />
      </MockedProvider>,
    )

    await waait(0)
  
    expect(wrapper).toMatchSnapshot()
  })

  it('Should contain error when promise has rejects', async () => {
    const mocks = [
      {
        request: {
          query: GET_ALL_TODOES,
        },
        error: new Error('Noooooooo!!!!')
      },
    ]

    const wrapper = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <TodoList />
      </MockedProvider>,
    )

    await waait(0)
  
    expect(wrapper).toMatchSnapshot()
  })
})

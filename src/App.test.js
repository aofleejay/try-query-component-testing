import React from 'react'
import { MockedProvider } from 'react-apollo/test-utils'
import renderer from 'react-test-renderer'
import waait from 'waait'
import App, { GET_CURRENCIES } from './App'

describe('Test App component', () => {
  it('Should contain loading ui when promise is pending', () => {
    const component = renderer.create(
      <MockedProvider mocks={[]} addTypename={false}>
        <App />
      </MockedProvider>,
    )
  
    expect(component).toMatchSnapshot()
  })

  it('Should contain response when promise has resolved', async () => {
    const mocks = [
      {
        request: {
          query: GET_CURRENCIES,
        },
        result: {
          data: {
            rates: [
              {
                "currency": "AED",
                "rate": "3.67"
              },
            ],
          },
        },
      },
    ]

    const component = renderer.create(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App />
      </MockedProvider>,
    )

    await waait(0)
  
    expect(component).toMatchSnapshot()
  })

  it('Should contain error when promise has rejects', async () => {
    const mocks = [
      {
        request: {
          query: GET_CURRENCIES,
        },
        error: new Error('Noooooooo!!!!')
      },
    ]

    const component = renderer.create(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App />
      </MockedProvider>,
    )

    await waait(0)
  
    expect(component).toMatchSnapshot()
  })
})

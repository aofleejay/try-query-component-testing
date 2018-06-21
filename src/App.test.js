import React from 'react';
import gql from 'graphql-tag'
import { MockedProvider } from 'react-apollo/test-utils';
import renderer from 'react-test-renderer';
import App from './App';

it('Render app component when loading', () => {
  const mocks = [
    {
      request: {
        query: gql`
          {
            rates(currency: "USD") {
              currency
              rate
            }
          }
        `,
        variables: {
          name: 'Buck',
        },
      },
      result: {
        data: {
          dog: { id: '1', name: 'Buck', breed: 'bulldog' },
        },
      },
    },
  ];

  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <App />
    </MockedProvider>,
  );

  const tree = component.toJSON();
  expect(tree.children).toContain('Loading...');
});

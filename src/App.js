import React, { Component } from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import logo from './logo.svg';
import './App.css';

export const GET_CURRENCIES = gql`
  {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`

class App extends Component {
  render() {
    return (
      <Query query={GET_CURRENCIES}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;

          return data.rates.map(({ currency, rate }) => (
            <div key={currency}>
              <p>{`${currency}: ${rate}`}</p>
            </div>
          ));
        }}
      </Query>
    );
  }
}

export default App;

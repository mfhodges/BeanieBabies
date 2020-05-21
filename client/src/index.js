import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'


/// How will this connect when in production?
const httpLink = createHttpLink({
  uri: 'http://localhost:5000/graphql/'
  //uri:'/graphql'
})
// if we are in production we should do 
// uri: '/graphql'


const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})



ReactDOM.render(
  <ApolloProvider client={client}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
);
/** 
const Root = () => (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )

ReactDOM.render(<Root />, document.getElementById('root'));
*/
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

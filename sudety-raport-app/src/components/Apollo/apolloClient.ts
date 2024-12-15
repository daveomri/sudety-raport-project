import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  from
 } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      alert(`Graphql error ${message} ${locations} ${path}`);
    });
  }
  if (networkError) {
    alert(`Network error ${networkError.name} - ${networkError.message}`);
  }
});

const link = from ([
    errorLink,
    new HttpLink({uri: 'https://sudetyraport.com/graphql'})
]);
  
const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link
});

export default client; 
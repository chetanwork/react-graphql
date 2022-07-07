import React from "react";
import AppRoutes from './routes/AppRoutes';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';

const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: cache
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <AppRoutes />
      </div>
    </ApolloProvider>
  );
}

export default App;

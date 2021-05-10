import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://wz51cnwa.api.sanity.io/v1/graphql/production/default',
  cache: new InMemoryCache()
});

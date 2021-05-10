import { ApolloClient, InMemoryCache } from "@apollo/client";
import { gql } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://wz51cnwa.api.sanity.io/v1/graphql/production/default',
  cache: new InMemoryCache()
});

export const getAllProjects = async () => await client.query({
  query: gql`
    query GetProjects {
      allProject {
          title
          description
          type
          location
          year
          thumbnail {
          asset {
              url
          }
          }
          images {
          asset {
              url
          }
          }
      }
      }
  `,
});
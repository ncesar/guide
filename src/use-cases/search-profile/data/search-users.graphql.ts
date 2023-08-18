import { gql } from 'graphql-request';

export const GithubSearchUsersQueryDoc = gql`
  query GithubSearchUsers($query: String!, $first: Int) {
    search(query: $query, type: USER, first: $first) {
      userCount
      edges {
        node {
          ... on User {
            id
            login
            avatarUrl
            url
            bio
            followers {
              totalCount
            }
            repositories(
              first: 5
              orderBy: { field: STARGAZERS, direction: DESC }
            ) {
              nodes {
                id
                name
                stargazerCount
              }
            }
          }
        }
      }
    }
  }
`;

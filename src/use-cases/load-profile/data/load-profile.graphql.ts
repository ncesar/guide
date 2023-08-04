import { gql } from 'graphql-request';

export const GithubProfileQueryDoc = gql`
  query GithubProfile {
    viewer {
      id
      name
      login
      avatarUrl
      followers {
        totalCount
      }
      following {
        totalCount
      }

      repositories(first: 50, orderBy: { field: STARGAZERS, direction: DESC }) {
        nodes {
          id
          name
          description
          stargazerCount
          url
        }
      }
    }
  }
`;

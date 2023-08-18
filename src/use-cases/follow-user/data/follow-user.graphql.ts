import { gql } from 'graphql-request';

export const FollowUserMutationDoc = gql`
  mutation FollowUser($userId: ID!) {
    followUser(input: { userId: $userId }) {
      user {
        id
        login
        viewerIsFollowing
      }
    }
  }
`;

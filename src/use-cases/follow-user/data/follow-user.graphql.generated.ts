import * as Types from '@/types/github.d';

export type FollowUserMutationVariables = Types.Exact<{
  userId: Types.Scalars['ID']['input'];
}>;


export type FollowUserMutation = { __typename?: 'Mutation', followUser?: { __typename?: 'FollowUserPayload', user?: { __typename?: 'User', id: string, login: string, viewerIsFollowing: boolean } | null } | null };

import * as Types from '@/types/github.d';

export type GithubProfileQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GithubProfileQuery = { __typename?: 'Query', viewer: { __typename?: 'User', id: string, name?: string | null, login: string, avatarUrl: any, followers: { __typename?: 'FollowerConnection', totalCount: number }, following: { __typename?: 'FollowingConnection', totalCount: number }, repositories: { __typename?: 'RepositoryConnection', nodes?: Array<{ __typename?: 'Repository', id: string, name: string, description?: string | null, stargazerCount: number, url: any } | null> | null } } };

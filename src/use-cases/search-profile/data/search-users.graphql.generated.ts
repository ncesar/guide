import * as Types from '@/types/github.d';

export type GithubSearchUsersQueryVariables = Types.Exact<{
  query: Types.Scalars['String']['input'];
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;


export type GithubSearchUsersQuery = { __typename?: 'Query', search: { __typename?: 'SearchResultItemConnection', userCount: number, edges?: Array<{ __typename?: 'SearchResultItemEdge', node?: { __typename?: 'App' } | { __typename?: 'Discussion' } | { __typename?: 'Issue' } | { __typename?: 'MarketplaceListing' } | { __typename?: 'Organization' } | { __typename?: 'PullRequest' } | { __typename?: 'Repository' } | { __typename?: 'User', id: string, login: string, avatarUrl: any, url: any, bio?: string | null, followers: { __typename?: 'FollowerConnection', totalCount: number }, repositories: { __typename?: 'RepositoryConnection', nodes?: Array<{ __typename?: 'Repository', id: string, name: string, stargazerCount: number } | null> | null } } | null } | null> | null } };

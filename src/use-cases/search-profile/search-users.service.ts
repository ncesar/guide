import { Github } from '@/adapters/github';
import { GithubSearchUsersQueryDoc } from './data/search-users.graphql';
import { GithubSearchUsersQueryVariables } from './data/search-users.graphql.generated';
import { SearchUsers, UserSearchResult } from './search-users';

interface GithubSearchUserNode {
  id: string;
  login: string;
  avatarUrl?: string;
  url?: string;
  bio?: string;
  followers?: { totalCount: number };
  repositories?: { nodes: { stargazerCount: number }[] };
}
interface GithubSearchUserEdge {
  node?: GithubSearchUserNode;
}

interface GithubSearchUsersQueryResult {
  search: {
    userCount: number;
    edges?: GithubSearchUserEdge[];
  };
}
export class SearchUsersService implements SearchUsers {
  constructor(private client: Github) {}
  async execute(query: string, first?: number): Promise<SearchUsers.Results> {
    const results = await this.client.gql<
      GithubSearchUsersQueryResult,
      GithubSearchUsersQueryVariables
    >(GithubSearchUsersQueryDoc, { query, first });

    const users: UserSearchResult[] =
      results.search.edges?.map((edge) => {
        const node = edge?.node;
        const starCount = node?.repositories?.nodes.reduce(
          (sum: number, repo) => sum + repo.stargazerCount,
          0,
        );

        return {
          id: node?.id ?? '',
          login: node?.login ?? '',
          avatarUrl: node?.avatarUrl ?? '',
          url: node?.url ?? '',
          bio: node?.bio ?? '',
          followers: node?.followers?.totalCount,
          starCount,
        };
      }) ?? [];

    return {
      userCount: results.search.userCount,
      users,
    };
  }
}

export default function makeSearchUsersService() {
  return new SearchUsersService(new Github());
}

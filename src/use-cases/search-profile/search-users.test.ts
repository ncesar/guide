import { Github } from '@/adapters/github';
import { GithubSearchUsersQueryDoc } from './data/search-users.graphql';
import SearchUsersService from './search-users.service';

const mockRequest = jest.fn();

jest.mock('@/adapters/github', () => {
  return {
    Github: jest.fn().mockImplementation(() => {
      return { gql: mockRequest };
    }),
  };
});

const client = new Github();
const service = SearchUsersService();

describe('SearchUsersService', () => {
  it('returns user search results', async () => {
    mockRequest.mockResolvedValue({
      search: {
        userCount: 2,
        edges: [
          {
            node: {
              id: '1',
              login: 'user1',
              avatarUrl: 'avatar1',
              url: 'url1',
              bio: 'bio1',
              followers: { totalCount: 100 },
              repositories: { nodes: [{ stargazerCount: 50 }] },
            },
          },
          {
            node: {
              id: '2',
              login: 'user2',
              avatarUrl: 'avatar2',
              url: 'url2',
              bio: 'bio2',
              followers: { totalCount: 200 },
              repositories: { nodes: [{ stargazerCount: 60 }] },
            },
          },
        ],
      },
    });

    const results = await service.execute('query', 10);

    expect(results).toEqual({
      userCount: 2,
      users: [
        {
          id: '1',
          login: 'user1',
          avatarUrl: 'avatar1',
          url: 'url1',
          bio: 'bio1',
          followers: 100,
          starCount: 50,
        },
        {
          id: '2',
          login: 'user2',
          avatarUrl: 'avatar2',
          url: 'url2',
          bio: 'bio2',
          followers: 200,
          starCount: 60,
        },
      ],
    });
  });
});

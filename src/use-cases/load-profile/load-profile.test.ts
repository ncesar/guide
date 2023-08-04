import { LoadProfileService } from './load-profile.service';
import { Github } from '@/adapters/github';

const mockRequest = jest.fn();

jest.mock('@/adapters/github', () => {
  return {
    Github: jest.fn().mockImplementation(() => {
      return { gql: mockRequest };
    }),
  };
});

const client = new Github();
const service = new LoadProfileService(client);

describe('LoadProfile', () => {
  it('returns user profile', async () => {
    mockRequest.mockResolvedValue({
      viewer: {
        name: 'Joe',
        login: 'joe.bob',
        following: { totalCount: 100 },
        followers: { totalCount: 10 },
        repositories: { nodes: [] },
      },
    });

    const results = await service.execute();

    expect(results).toEqual({
      repositories: [],
      user: expect.objectContaining({
        name: 'Joe',
        login: 'joe.bob',
        following: 100,
        followers: 10,
      }),
    });
  });
});

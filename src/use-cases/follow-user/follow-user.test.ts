import { Github } from '@/adapters/github';
import { FollowUserMutationDoc } from './data/follow-user.graphql';
import FollowUserService from './follow-user.service';

const mockRequest = jest.fn();

jest.mock('@/adapters/github', () => {
  return {
    Github: jest.fn().mockImplementation(() => {
      return { gql: mockRequest };
    }),
  };
});

const service = FollowUserService();

describe('FollowUserService', () => {
  it('follows a user and returns true if successful', async () => {
    mockRequest.mockResolvedValue({
      followUser: {
        user: {
          viewerIsFollowing: true,
        },
      },
    });

    const userId = '12345';
    const result = await service.followUser(userId);

    expect(result).toBe(true);
    expect(mockRequest).toHaveBeenCalledWith(FollowUserMutationDoc, { userId });
  });

  it('returns false if following is unsuccessful', async () => {
    mockRequest.mockResolvedValue({
      followUser: {
        user: {
          viewerIsFollowing: false,
        },
      },
    });

    const userId = '12345';
    const result = await service.followUser(userId);

    expect(result).toBe(false);
    expect(mockRequest).toHaveBeenCalledWith(FollowUserMutationDoc, { userId });
  });
});

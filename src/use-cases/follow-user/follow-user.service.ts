import { Github } from '@/adapters/github';
import { FollowUserMutationDoc } from './data/follow-user.graphql';
import { Results } from '@/app/search/page';

export class FollowUserService {
  constructor(private client: Github) {}

  async followUser(userId: string): Promise<boolean> {
    const result = (await this.client.gql(FollowUserMutationDoc, {
      userId,
    })) as Results;

    return result.followUser.user.viewerIsFollowing;
  }
}

export default function makeFollowUserService() {
  return new FollowUserService(new Github());
}

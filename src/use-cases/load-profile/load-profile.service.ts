import { gql } from 'graphql-request';

import { Github } from '@/adapters/github';

import { LoadProfile } from './load-profile';
import { GithubProfileQueryDoc } from './data/load-profile.graphql';
import {
  GithubProfileQuery,
  GithubProfileQueryVariables,
} from './data/load-profile.graphql.generated';

export class LoadProfileService implements LoadProfile {
  constructor(private client: Github) {}

  async execute(): Promise<LoadProfile.Results> {
    const results = await this.client.gql<
      GithubProfileQuery,
      GithubProfileQueryVariables
    >(GithubProfileQueryDoc);

    const user = results.viewer;
    const repositories = results.viewer.repositories.nodes || [];

    return {
      user: {
        id: user.id,
        login: user.login,
        name: user.name || '',
        avatarUrl: user.avatarUrl,
        followers: user.followers.totalCount || 0,
        following: user.following.totalCount || 0,
      },

      repositories: repositories.flatMap((repo) => (repo ? [repo] : [])),
    };
  }
}

export default function makeLoadProfileService() {
  return new LoadProfileService(new Github());
}

import { Repository, User } from '@/types/github.d';

export interface LoadProfile {
  execute(): Promise<LoadProfile.Results>;
}

type ProfileRepo = Pick<
  Repository,
  'id' | 'name' | 'description' | 'stargazerCount' | 'url'
>;

export namespace LoadProfile {
  export interface Results {
    user: Pick<User, 'id' | 'name' | 'login' | 'avatarUrl'> & {
      followers: number;
      following: number;
    };

    repositories: ProfileRepo[];
  }
}

export interface FollowUser {
  followUser(userId: string): Promise<boolean>;
}

export namespace FollowUser {
  export interface User {
    id: string;
    login: string;
    viewerIsFollowing: boolean;
  }
}

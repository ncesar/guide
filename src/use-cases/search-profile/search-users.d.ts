export interface SearchUsers {
  execute(query: string, first?: number): Promise<SearchUsers.Results>;
}

export type UserSearchResult = {
  id: string | undefined;
  login: string | undefined;
  avatarUrl: string | undefined;
  url: string | undefined;
  bio: string | undefined;
  followers: number | undefined;
  starCount: number | undefined;
};

export namespace SearchUsers {
  export interface Results {
    userCount: number;
    users: UserSearchResult[];
  }
}

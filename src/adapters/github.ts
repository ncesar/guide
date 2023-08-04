import { DocumentNode } from 'graphql';
import { GraphQLClient, Variables } from 'graphql-request';

interface Options {
  apiHost?: string;
  accessToken?: string;
  client?: GraphQLClient;
}

export class Github {
  private apiHost: string;
  private accessToken: string;
  private client: GraphQLClient;

  constructor(options?: Options) {
    this.apiHost = options?.apiHost || 'https://api.github.com';

    this.accessToken =
      options?.accessToken || process.env.NEXT_PUBLIC_GITHUB_ACCESS_KEY || '';

    this.client =
      options?.client ||
      new GraphQLClient(`${this.apiHost}/graphql`, {
        headers: { authorization: `Bearer ${this.accessToken}` },
      });
  }

  gql<QueryType, VariableType extends Variables>(
    document: string,
    variables?: VariableType
  ) {
    return this.client.request<QueryType, Variables>(document, variables);
  }
}

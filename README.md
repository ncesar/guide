# GuideCX: Frontend Assessment

This project was bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Technology

- React
- TypeScript
- GraphQL (Apollo Client)
- Tailwind CSS

## Setup

- install dependencies

```
npm install
```

- setup environment variables

```
cp .env.example .env.local
```

- [Create a personal access token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) and save it to your `.env` file. The scopes you require depends on the type of data you're wanting to fetch. The following configuration is a good start:

```
  - repo
    - repo_deployment
    - public_repo
  - user
    - read:user
    - user:email
```

![](https://i.imgur.com/8TUUi0D.jpg)


- **Explore the Github GraphQL API**: If you're new to the Github GraphQL API, you may consider spending a few minutes exploring the public schema to get an idea of what data is available. See [Github GraphQL Explorer](https://docs.github.com/en/graphql/overview/explorer).

## Problem

You've got access to a lot of Github data. There's a placeholder component at [./src/containers/magic](./src/containers/magic) where you're free to build whatever you'd like, leveraging GraphQL Queries and/or Mutations on the Github GraphQL API.

Some examples:

- Search Repos
- List which repos have been forked by your followers
- Compare analytics between multiple repos
- List all vulnerabilities of selected repos, filter by vulnerability type

Here are some ground rules:

- [ ] must have at least one query
- [ ] don't spend any longer than 4 hours
- [ ] use whatever UI or styling approaches you're comfortable with. This repo has been setup with `scss` and tailwindcss
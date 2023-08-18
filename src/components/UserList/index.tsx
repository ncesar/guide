import React from 'react';
import styles from './component.module.scss';
import Image from 'next/image';
import { Results } from '@/app/search/page';

type UserListProps = {
  results: Results;
  selectedUsers: number[];
  handleSelectUser: (id: number) => void;
};

export const UserList = ({
  results,
  selectedUsers,
  handleSelectUser,
}: UserListProps) => {
  return (
    <div className={styles.SearchUsersPage}>
      <div className={styles.SearchUsersPage__Wrapper}>
        <h3 className={styles.SearchUsersPage__UserCount}>
          {results.userCount && `Found ${results.userCount} fighters.`}
        </h3>
        <p>
          Choose two to compare stats and see who is the 🏆
          <strong>Winner</strong>🏆
        </p>
        <div className={styles.SearchUsersPage__UserList}>
          {results.users.map((user) => (
            <div
              key={user.id}
              className={`${styles.SearchUsersPage__UserItem} ${
                selectedUsers.length === 2 && !selectedUsers.includes(user.id)
                  ? 'hidden'
                  : ''
              } ${
                selectedUsers.length === 2 && selectedUsers.includes(user.id)
                  ? selectedUsers[0] === user.id
                    ? styles.BrawlAnimationLeft
                    : styles.BrawlAnimationRight
                  : ''
              }`}
              onClick={() => handleSelectUser(user.id)}
            >
              <div className={styles.SearchUsersPage__UserCard}>
                <Image
                  src={user.avatarUrl}
                  alt="user profile"
                  width="50"
                  height="50"
                  className="mb-2"
                />
                <a
                  href={user.url}
                  target="_blank"
                  className={styles.SearchUsersPage__UserLink}
                >
                  {user.login}
                </a>
                <div>Followers: {user.followers}</div>
                <div>Star Count: {user.starCount}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

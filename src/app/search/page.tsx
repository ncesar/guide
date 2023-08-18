'use client';
import makeSearchUsersService from '@/use-cases/search-profile/search-users.service';
import React, { useEffect, useState } from 'react';
import styles from './page.module.scss';
import makeFollowUserService from '@/use-cases/follow-user/follow-user.service';
import { Header } from '@/components/Header';
import { Modal } from '@/components/Modal';
import { UserList } from '@/components/UserList';
import { SearchBar } from '@/components/SearchBar';

export type Results = {
  users: User[];
  userCount?: number;
  followUser?: any;
};
export type User = {
  avatarUrl: string;
  followers: number;
  id: number;
  login: string;
  starCount: number;
  url: string;
};

export default function SearchUsersPage() {
  const [query, setQuery] = useState('');
  const [winner, setWinner] = useState<User | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [results, setResults] = useState<Results>({ users: [] });
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);

  const handleSelectUser = (id: number) => {
    if (selectedUsers.length < 2) {
      setSelectedUsers((prevSelected) => [...prevSelected, id]);
    }
    if (selectedUsers.length === 1) {
      const audio = new Audio('/assets/audio/fight.mp3');
      audio.play();
    }
  };

  const calculateWinner = () => {
    const user1 = results.users.find(
      (user: User) => user.id === selectedUsers[0],
    );
    const user2 = results.users.find(
      (user: User) => user.id === selectedUsers[1],
    );

    if (user1 && user2) {
      const avg1 = (user1.followers + user1.starCount) / 2;
      const avg2 = (user2.followers + user2.starCount) / 2;

      if (avg1 === avg2) {
        setWinner(null); // No winner in case of a draw
      } else {
        const winner = avg1 > avg2 ? user1 : user2;
        setWinner(winner);
      }
      setShowModal(true);
    }
  };

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem('searchQuery', query);
    const service = makeSearchUsersService();
    const searchResults = await service.execute(query, 6);
    setResults(searchResults as unknown as Results);
  };

  const handleFollowUser = async () => {
    const followUserService = makeFollowUserService();
    await followUserService.followUser(String(winner?.id));
    alert(`You are now following ${winner?.login}`);
  };

  useEffect(() => {
    if (selectedUsers.length === 2) {
      setTimeout(() => {
        calculateWinner();
        setSelectedUsers([]);
      }, 1500); // Reset after the new animation duration
    }
  }, [selectedUsers]);

  return (
    <div>
      <div className={styles.SearchUsersPage}>
        <Header />
        <SearchBar
          handleSearch={handleSearch}
          query={query}
          setQuery={setQuery}
        />
        {results && (
          <UserList
            results={results}
            selectedUsers={selectedUsers}
            handleSelectUser={handleSelectUser}
          />
        )}
        {showModal && (
          <Modal
            winner={winner}
            onButtonClickHandler={handleFollowUser}
            onCloseHandler={() => setShowModal(false)}
          />
        )}
      </div>
    </div>
  );
}

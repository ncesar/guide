'use client';
import React from 'react';
import styles from './component.module.scss';
import { SoapButton } from '../SoapButton';

type SearchProps = {
  handleSearch: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};
export const SearchBar = ({ handleSearch, query, setQuery }: SearchProps) => {
  return (
    <form className={styles.SearchContainer} onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for users..."
        className={styles.SearchContainer__Input}
      />
      <SoapButton text="Search" />
    </form>
  );
};

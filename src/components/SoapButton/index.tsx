'use client';
import React from 'react';
import styles from './component.module.scss';

export const SoapButton = ({
  text = '',
  shouldPlaySound = false,
  ...other
}) => {
  const playSound = () => {
    const audio = new Audio('/assets/audio/start.mp3');
    audio.play();
  };
  return (
    <button
      className={styles.Soap}
      onClick={shouldPlaySound ? playSound : undefined}
      {...other}
    >
      <p className={styles.Soap__Shadow}>{text}</p>
    </button>
  );
};

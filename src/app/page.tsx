import Image from 'next/image';
import Link from 'next/link';

import styles from './page.module.scss';
import { SoapButton } from '@/components/SoapButton';
import { Header } from '@/components/Header';

export default function Home() {
  return (
    <main className={styles.HomePage}>
      <Header />
      <article className={styles.HomePage__Content}>
        <h2>
          The first rule of <span>fight club</span> is: you do not talk about{' '}
          <span>fight club</span>.
        </h2>

        <Link href="/search">
          <SoapButton text="Start" shouldPlaySound />
        </Link>
      </article>
    </main>
  );
}

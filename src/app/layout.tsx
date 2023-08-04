import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

import styles from './layout.module.scss';

export const metadata: Metadata = {
  title: 'GUIDEcx Engineering',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={[styles.RootLayout, inter.className].join(' ')}>
        {children}
      </body>
    </html>
  );
}

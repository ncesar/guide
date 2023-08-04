import { ReactNode } from 'react';

import styles from './layout.module.scss';

interface Props {
  children: ReactNode;
}

export default function ProfileLayout({ children }: Props) {
  return <main className={styles.ProfileLayout}>{children}</main>;
}

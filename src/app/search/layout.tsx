import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function SearchLayout({ children }: Props) {
  return <main>{children}</main>;
}

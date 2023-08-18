import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const Header = () => {
  return (
    <header>
      <Link href="/">
        <Image
          src="https://www.guidecx.com/wp-content/uploads/2022/06/gcx-logo.svg"
          width="500"
          height="100"
          alt="GUIDEcx"
        />
      </Link>
    </header>
  );
};

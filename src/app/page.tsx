import Image from 'next/image';
import Link from 'next/link';

import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.HomePage}>
      <header>
        <Image
          src="https://www.guidecx.com/wp-content/uploads/2022/06/gcx-logo.svg"
          width="500"
          height="100"
          alt="GUIDEcx"
        />
      </header>

      <article className={styles.HomePage__Content}>
        <h1>Welcome!</h1>
        <h2>GUIDEcx Frontend Coding Exercise</h2>

        <p>
          The objective of this exercise is to introduce you to some of the
          technologies the Frontend Engineers use at GUIDEcx and help us better
          understand how you approach a problem. The objective is not to deliver
          a final product, but it should be functional and well designed and
          developed.
        </p>

        <h3>Problem Statement</h3>
        <p>
          You're a frontend engineer at Github and you've been tasked with
          building a new product that will become the new landing page for
          Github account holders. Leveraging the Github GraphQL API, you're
          supposed to build this page with whatever components and data you
          wish. Be creative - we're only looking to see how to decompose a
          problem into working software.
        </p>

        <ul>
          <li>
            We've built a very basic page <Link href="/profile">here</Link>
          </li>
          <li>
            And stubbed a blank page for you <Link href="/magic">here</Link>
          </li>
        </ul>

        <h3>Ground Rules</h3>
        <ul>
          <li>Must include at least one query</li>
          <li>Don't spend more than 4-6 hours</li>
          <li>
            Use whatever UI or styling approaches you're comfortable with. This
            project has been setup with TailwindCSS
          </li>
          <li>
            <i>Optional</i>: Add a mutation
          </li>
          <li>
            <i>Optional</i>: Add unit tests
          </li>
        </ul>
      </article>
    </main>
  );
}

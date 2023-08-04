import Image from 'next/image';
import Link from 'next/link';

import makeService from '@/use-cases/load-profile/load-profile.service';
import styles from './page.module.scss';

export default async function ProfilePage() {
  const profile = await makeService().execute();
  const { user, repositories } = profile;

  return (
    <>
      <article className={styles.ProfilePage}>
        <div className={styles.Avatar}>
          <Image
            className={styles.Avatar__Image}
            src={user?.avatarUrl}
            alt="user profile"
            width="150"
            height="150"
          />
        </div>
        <h1 className={styles.ProfilePage__Title}>{user?.name}</h1>
        <h2 className={styles.ProfilePage__SubTitle}>{user?.login}</h2>
        <div className={styles.ProfilePage__Followers}>
          <div className="pr-4">Followers: {user?.followers}</div>
          <div>Following: {user?.following}</div>
        </div>
      </article>

      <article className={styles.ProfileRepos}>
        <h3>Repositories</h3>
        <div className={styles.ProfileRepos__Container}>
          {repositories.map((repo) => (
            <div key={repo.id} className={styles.ProfileRepos__Item}>
              <Link href={repo.url}>{repo.name}</Link>
              <p>{repo.description}</p>

              <footer>
                <span>Stars: {repo.stargazerCount}</span>
              </footer>
            </div>
          ))}
        </div>
      </article>
    </>
  );
}

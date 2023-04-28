import Link from 'next/link';
import styles from '@/styles/Abt.module.css';

const Abt = () => (
  <main className={styles.mobile}>
    <div className={styles.text}>
      <p>
        my name is tobby, i am full-stack developer and i prolificient with
        Ruby On Rails as a full-stack framework,
        i am also vast with Javascript, Ruby, TypeScript,
        React.JS, Next.JS. I current live in lagos, Nigeria and
        i love to work remotely.
        You can always connect with me via my socials
        {' '}
      </p>
      <ul>
        <li>
          <Link href="https://github.com/Tobby8629">
            <i className="fa-brands fa-github" />
            <span>GitHub</span>
          </Link>
        </li>
        <li>
          <Link href="www.linkedin.com/in/samuel-popoola-tobby">
            <i className="fa-brands fa-linkedin" />
            <span>LinkedIn</span>
          </Link>
        </li>
        <li>
          <Link href="https://twitter.com/thobie_tobeh">
            <i className="fa-brands fa-twitter" />
            <span>twitter</span>
          </Link>
        </li>
      </ul>
    </div>
    <div className={styles.link}>
      <Link href="https://docs.google.com/document/d/1guLVGmMHdhOEwZAVogeYqqd24TH_Ub-bFpnwpJIYpJY/edit?usp=sharing">checkout my resume</Link>
      <Link href="/projects">see my project</Link>
    </div>
  </main>
);

export default Abt;

import { useEffect, useRef } from 'react';
import Link from 'next/link';

const TobbyInfo = () => {
  const linkRef = useRef(null);

  useEffect(() => {
    linkRef.current.focus();
  }, []);
  return(
  <main>
    <div className="text">
      <p>
        I&apos;m a highly skilled full-stack developer With
        expertise in building exceptional websites. You can connect with me via.
      </p>
      <ul>
        <li>
          <Link href="https://github.com/Tobby8629">
            <i className="fa-brands fa-github" />
          </Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/samuel-popoola-tobby/">
            <i className="fa-brands fa-linkedin" />
          </Link>
        </li>
        <li>
          <Link href="https://twitter.com/thobie_tobeh">
            <i className="fa-brands fa-twitter" />
          </Link>
        </li>
      </ul>
    </div>
    <div className="link">
      <Link ref={linkRef} href="/projects" autoFocus={true}> my project</Link>
      <Link href="/TobbyResume.pdf"> my resume</Link>
    </div>
  </main>
  )
  };

export default TobbyInfo;

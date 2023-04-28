import Link from 'next/link';
import styles from '@/styles/project.module.css';

const ProNav = () => (

  <div>
    <header className={styles.header} style={{ backgroundImage: 'linear-gradient(rgba(63, 63, 63, 0.795),rgba(63, 63, 63, 0.7495)),url(/project.jpg)' }}>
      <h2>Projects</h2>
    </header>
    <nav className={styles.navbar}>
      <Link href="/projects">All</Link>
      <Link href="/projects/portfolio">portfolio</Link>
      <Link href="/projects/utility">utility</Link>
      <Link href="/projects/metric">metric</Link>
      <Link href="/projects/others">others</Link>
    </nav>
  </div>

);

export default ProNav;

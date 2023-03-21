import Link from 'next/link';
import project from '../../public/projects';
import ProNav from './pronav';
import styles from '@/styles/project.module.css';

const Utility = () => {
  const utility = project.filter((pro) => pro.group === 'utility');
  return (
    <>
      <ProNav />
      <main className={styles.main}>
        {utility.map((ut) => (
          <Link href={ut.project} className={styles.each} key={ut.id}>
            <div className={styles.img}>
              <img src={ut.image} alt="project view" />
            </div>
            <div className={styles.text}>
              <h3>{ut.title}</h3>
            </div>
          </Link>
        ))}
      </main>
    </>

  );
};

export default Utility;

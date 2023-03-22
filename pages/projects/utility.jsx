import Link from 'next/link';
import project from '../../public/projects';
import ProNav from './pronav';
import styles from '@/styles/project.module.css';

const Utility = () => {
  const utility = project.filter((pro) => pro.group === 'utility');
  return (
    <>
      <ProNav />
      <div className={styles.main}>
        {utility.map((ut) => (
          <div className={styles.each} key={ut.id}>
            <Link href={ut.project} >
              <div className={styles.img}>
                <img src={ut.image} alt="project view" />
              </div>
              <div className={styles.text}>
                <h3>{ut.title}</h3>
              </div>
            </Link>
          </div>
          
        ))}
      </div>
    </>

  );
};

export default Utility;

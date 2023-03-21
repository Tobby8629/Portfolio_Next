import Link from 'next/link';
import project from '../../public/projects';
import ProNav from './pronav';
import styles from '@/styles/project.module.css';

const Metric = () => {
  const metric = project.filter((pro) => pro.group === 'metric');
  return (
    <>
      <ProNav />
      <main className={styles.main}>
        {metric.map((ut) => (
          <div className={styles.each} key={ut.id}>
            <Link href={ut.project} className={styles.each}>
              <div className={styles.img}>
                <img src={ut.image} alt="project view" />
              </div>
              <div className={styles.text}>
                <h3>{ut.title}</h3>
              </div>
            </Link>
          </div>

        ))}
      </main>
    </>
  );
};

export default Metric;

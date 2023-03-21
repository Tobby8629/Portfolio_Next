import Link from 'next/link';
import project from '../../public/projects';
import styles from '@/styles/project.module.css';

const Detail = () => (
  <div className={styles.main}>
    {project.map((pro) => (
      <div className={styles.each} key={pro.id}>
        <Link href={pro.project}>
          <div className={styles.img}>
            <img src={pro.image} alt="project view" />
          </div>
          <div className={styles.text}>
            <h3>{pro.title}</h3>
          </div>
        </Link>
      </div>

    ))}
  </div>
);

export default Detail;

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
    {utility.map((pro) => (
      <div className={styles.each} key={pro.id}>
      
          <div className={styles.img}>
            <img src={pro.image} alt="project view" />
          </div>
         
          <h3>{pro.title}</h3>

          <div className={styles.shadow}>

            <div className={styles.top}>
              <h3>{pro.title}</h3>
              <h4>{pro.group}</h4>
            </div>

            <div className={styles.mid}>
              <p>{pro.desc}</p>
            </div>

            <ul className={styles.stacks}>
              {pro.stacks.map((stack)=>(
                <li key={Math.floor(Math.random()*200)}>{stack}</li>
              ))}
            </ul>

            <div className={styles.btns}>
             <Link href={pro.project}>See live</Link>
             <Link href={pro.source}> see demo</Link>
            </div>

          </div>
          
      </div>

    ))}
  </div>
    </>

  );
};

export default Utility;

import Link from 'next/link'; 
import styles from '@/styles/project.module.css';
import propTypes from "prop-types";

const Detail = ({ project }) => (
  <div className={styles.main}>
    {project.map((pro) => (
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
             <Link href={pro.source}> see source</Link>
            </div>

          </div>

      </div>

    ))}
  </div>
);

Detail.propTypes = {
 project: propTypes.array.isRequired 
}

export default Detail;

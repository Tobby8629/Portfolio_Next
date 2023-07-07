import styles from '@/styles/Abt.module.css';
import AOS  from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Tools = ({tools,title,anime}) => {
  useEffect(()=>{
    AOS.init({duration: 1500})
  },[])
    return ( 
        <div className={styles.tools} data-aos={anime}>
          <h4>{title}: </h4>
           <div className={styles.alltool}>
             {tools.map((e)=>(
               <div key={e.id}>
                 <img src={e.image} alt={e.name} />
              </div>
             ))}
        </div>
        </div>
     );
}
 
export default Tools;
import styles from '@/styles/Abt.module.css';

const Tools = ({tools,title}) => {
    return ( 
        <div className={styles.tools}>
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
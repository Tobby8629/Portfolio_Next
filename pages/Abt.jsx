import Link from 'next/link';
import styles from '@/styles/Abt.module.css';
import MoreAbout from '@/components/tee';

const Abt = () => {
  const skill = [
    "punctunality", "adaptability",
    "working with designs","problem-solving", "Github", "deployments",
    "collaboration", "communication", "teamwork", "Jest", "MVC", "Remote pair-programming", "Database-design", "Gitflow",
    "code review", "mentorship"]

  const tools = [
    {
      id: 1,
      name: "Html5",
      image: '/html5.png'
    },
    {
      id: 2,
      name: "css",
      image: '/css.png'
    },
    {
      id: 3,
      name: "javascript",
      image: '/javascript.png'
    },
    {
      id: 4,
      name: "chromedev",
      image: '/chromedev.png'
    },
    {
      id: 5,
      name: "render",
      image: '/render.png'
    },
    {
      id: 6,
      name: "github",
      image: '/github.png'
    },
    {
      id: 7,
      name: "rails",
     image: '/rails.svg'
    },
    {
      id: 8,
      name: "vercel",
      image: '/Vercel.png'
    },
    
  ]

  return (
    <main className={styles.mobil}>
    <div className={styles.texts}>
      <div className={styles.imag}>
        <img src='tobby.jpg' alt='tobby' className='desk'/>
      </div>
      <MoreAbout />
     </div>
    <div className={styles.st}>
      <div className={styles.ski}>
      <h2 className='head'>Skills</h2>
        <div className={styles.experience}>
          {skill.map((e) => (
              <span key={e} className={styles.skills}>{e}</span>
            ))}
        </div>
      </div>
      
      <div className={styles.tools}>
           <h2 className='head'>Tools</h2>
           <div className={styles.alltool}>
             {tools.map((e)=>(
               <div key={e.id}>
                 <img src={e.image} alt={e.name} />
              </div>
             ))}
        </div>
      </div>
    </div>
  </main>
  )
  
  };

export default Abt;

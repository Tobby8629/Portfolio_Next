import styles from '@/styles/Abt.module.css';
import MoreAbout from '@/components/tee';
import Tools from '@/components/Tools';
import AOS  from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Abt = () => {
  const skill = [
    "punctunality", "adaptability", "time management",
    "working with designs","problem-solving","collaboration",
     "communication", "teamwork", "Remote pair-programming", "Database-design", "Gitflow",
    "code review", "mentorship"]

  const tools = [
    {
      id: 1,
      name: "Html5",
      image: '/html5.png',
      class: "frontend"
    },
    {
      id: 9,
      name: "React js",
      image: '/react.svg',
      class: "frontend"
    },
    {
      id: 10,
      name: "redux",
      image: '/redux.svg',
      class: "frontend"
    },
    {
      id: 11,
      name: "tailwind",
      image: '/tailwind.svg',
      class: "frontend"
    },
    {
      id: 12,
      name: "next js",
      image: '/next.svg',
      class: "frontend"
    },
    {
      id: 13,
      name: "postgreSQL",
      image: '/postgres.svg',
      class: "backend"
    },
    {
      id: 14,
      name: "rspec",
      image: '/rspec.svg',
      class: "tool"
    },
    {
      id: 15,
      name: "jest",
      image: '/jest.svg',
      class: "tool"
    },
    {
      id: 16,
      name: "npm",
      image: '/npm.svg',
      class: "tool"
    },
    {
      id: 17,
      name: "sanityio",
      image: '/sanity.svg',
      class: "backend"
    },
    {
      id: 18,
      name: "ruby",
      image: '/ruby.svg',
      class: "backend"
    },
    {
      id: 20,
      name: "JWT",
      image: '/jwt.svg',
      class: "backend"
    },
    {
      id: 19,
      name: "cancan",
      image: '/cancan.svg',
      class: "backend"
    },
    {
      id: 2,
      name: "css",
      image: '/css.png',
      class: "frontend"
    },
    {
      id: 3,
      name: "javascript",
      image: '/javascript.png',
      class: "frontend"
    },
    {
      id: 4,
      name: "chromedev",
      image: '/chromedev.png',
      class: "tool",
    },
    {
      id: 5,
      name: "render",
      image: '/render.png',
      class: "tool",
    },
    {
      id: 6,
      name: "github",
      image: '/github.png',
      class: "tool",
    },
    {
      id: 7,
      name: "rails",
     image: '/rails.svg',
     class: 'backend',
    },
    {
      id: 8,
      name: "vercel",
      image: '/Vercel.png',
      class: 'tool'
    },
    
  ]

  const frontend = tools.filter((e)=> e.class === "frontend")
  const backend = tools.filter((e)=> e.class === "backend")
  const tool = tools.filter((e)=> e.class === "tool")

  useEffect(()=>{
    AOS.init({duration: 1500})
  },[])

  return (
    <main className={styles.mobil} style={{overflow: "hidden"}}>
    <div className={styles.texts}>
      <div className={styles.imag} data-aos = "fade-right">
        <img src='tobby.jpg' alt='tobby' className='desk'/>
      </div>
      <MoreAbout />
     </div>
     <>
       <h2 className='head'>Skills and Tools</h2>
       <div className={styles.st}>
        <Tools title="Front-end" tools = {frontend} anime="zoom-in" />
        <Tools title="Backend-end" tools = {backend} anime="fade-left" />
        <Tools title="Other tools" tools = {tool} anime="fade-right" />
        <div className={styles.ski} data-aos="flip-right">
          <>
            <h4>soft skills: </h4>
            <div className={styles.experience}>
            {skill.map((e) => (
                <span key={e} className={styles.skills}>{e}</span>
              ))}
          </div>
          </>
        </div>
    </div>
     </>
  </main>
  )
  
  };

export default Abt;

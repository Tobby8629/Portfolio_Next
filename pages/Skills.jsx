import styles from '@/styles/skills.module.css'

const Skills = () => {
  const skill = [
    {title: "Html", rate: 80, id: 1 },
    {title: "CSS", rate: 80, id: 2 },
    {title: "JavaScript", rate: 50, id: 3 },
    {title: "React", rate: 60, id: 4 },
    {title: "Next", rate: 40, id: 5 },
    {title: "Ruby", rate: 30, id: 6 },
    {title: "Ruby on Rails", rate: 30, id: 7 },
    {title: "GitHub", rate: 70, id: 8 },
    {title: "Collaboration", rate: 80, id: 9 },
    {title: "Communication", rate: 80, id: 10 }
  ]
    return ( 
        <>
          <header
      className={styles.header}
      style={{
        backgroundImage:
       'linear-gradient(rgba(63, 63, 63, 0.295),rgba(63, 63, 63, 0.295)),url(/skill.jpg)',
      }}
    > <h2>Skills </h2> </header>
          <div className={styles.skills}>
            <h2 className='head'> My skills</h2>
            <ul>
              {skill.map((skill)=>(
                <li key={skill.id}>
                <p>{skill.title}: {skill.rate}% </p>
                <span className={styles.rate} style={{"--width": `${skill.rate}%`}}> </span>
              </li>
              ))}
              
            </ul> 
          </div>
        </>
     );
}
 
export default Skills;
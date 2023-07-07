import AOS  from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const MoreAbout = () => {
  useEffect(()=>{
    AOS.init({duration: 1500})
  },[])
    return ( 
       <div data-aos="fade-left">
         <p>
          I&apos;m a highly skilled web developer with diverse experience 
        in various technologies. Proficient in Ruby on Rails, JavaScript, 
        TypeScript, React.js, and Next.js, I excels in both front-end
         and back-end development. With strong work ethics, adaptability, 
         and excellent communication, Tobby delivers exceptional outcomes in 
         remote work environments. Possessing a remarkable range of technical 
         skills and genuine enthusiasm for web development, Tobby 
        is a highly capable professional with a strong commitment to professionalism.
          </p>
       </div>
        
     );
}
 
export default MoreAbout;
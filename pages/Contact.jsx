import Link from 'next/link';
import styles from '../styles/contact.module.css'
import AOS  from 'aos';
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react';

const Contact = () => {
  useEffect(()=>{
    AOS.init({duration: 1500})
  },[])

  const [form, setform] = useState({name:"", email:"", message:""})   
  const handlesubmit = (e) => {
    const child = e.target.querySelector('.contact_conditions__sKRsj')
    if (form.name=== "" || form.email=== "" || form.message=== "" || form.email !== form.email.toLowerCase() || form.message.length < 10) {
     e.preventDefault(); 
     child.style.display = "block"
    }
    else {
      child.style.display = "hide"
    }
  }


    return ( 
        <section className={styles.contact} >
          <h3 className='head'>Contact Me</h3>
          <form action="https://formspree.io/f/mzbwnraj" method="post" id="port-form" data-aos="fade-right" onSubmit={handlesubmit}>
            <p className={styles.white}>
            &ldquo;Start a conversation with us today by reaching out. I am eager to address your inquiries,
             discuss your project needs, and collaborate on creating exceptional web solutions.
             Don&apos;t hesitate to contact us and experience our commitment to delivering high-quality and tailored web development services&ldquo;.
            </p>
            <input type="text" name="user-name" maxLength="30" placeholder="enter your name" id="username"  onChange={(e)=> setform({...form,name: e.target.value})}/>
            <input type="email" name="user-email" placeholder="enter your email" id="email" onChange={(e)=> setform({...form, email: e.target.value})}/>
            <textarea name="user-message" id="message"  maxLength="500" placeholder="write your message here" onChange={(e)=> setform({...form, message: e.target.value})}/>
            <ul className={styles.conditions}>
              <li>fill all input</li>
              <li>Email input should be in lowerCase</li>
              <li>message input must not be less than 10</li>
              <li>All input field should be filled approiately</li>
            </ul>
            <button type="submit" className="btn" >get in touch</button>
          </form>
          <div className={styles.socials} data-aos="zoom-in">
            <h4>You can also reach us Via:</h4>
            <ul>
              <li>
                Twitter: <Link href='https://twitter.com/thobie_tobeh'>@tobby_samuels</Link>
              </li>
              <li>
                LinkedIn: <Link href='https://www.linkedin.com/in/samuel-popoola-tobby/'>samuel Popoola</Link>
              </li>
              <li>
                Instagram: <Link href='instagram.com/tobby_samuels/'>@tobby_samuels</Link>
              </li>
            </ul>
          </div>
        </section>
        
     );
}
 
export default Contact;
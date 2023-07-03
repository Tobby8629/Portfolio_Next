import Link from 'next/link';
import styles from '../styles/contact.module.css'

const Contact = () => {
    return ( 
        <section className={styles.contact}>
          <h3 className='head'>Contact Me</h3>
          <form action="https://formspree.io/f/mzbwnraj" method="post" id="port-form">
            <input type="text" name="user-name" maxLength="30" placeholder="enter your name" id="username"/>
            <input type="email" name="user-email" placeholder="enter your email" id="email"/>
            <textarea name="user-message" id="message"  maxLength="500" placeholder="write your message here"></textarea>
            <ul className={styles.conditions}>
              <li>Email input should be in lowerCase</li>
              <li>fill all input</li>
              <li>message input must not be less than 10</li>
              <li>All input field should be filled approiately</li>
            </ul>
            <button type="submit" className="btn" >get in touch</button>
          </form>
          <div className={styles.socials}>
            <h4>You can also reach us Via:</h4>
            <ul>
              <li>
                Twitter: <Link href='https://twitter.com/thobie_tobeh'>@tobby_samuels</Link>
              </li>
              <li>
                LinkedIn: <Link href='www.linkedin.com/in/samuel-popoola-tobby'>samuel Popoola</Link>
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
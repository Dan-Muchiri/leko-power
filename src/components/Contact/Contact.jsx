import styles from "./ContactStyles.module.css"
import React, { useEffect } from 'react';

function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top of the page
    }, []); // Empty dependency array ensures this runs only on mount
  return (
    <section id="contact" className={styles.container}>
        <h1 className={styles.sectionTitle}>Contact Us</h1>
        <form action="https://formspree.io/f/mpwarlen" method="post">
            <div className="formGroup">
                <label htmlFor="name" hidden>
                    Name
                </label>
                <input type="text" name="name" id="name" placeholder="Name" required/>
            </div>
            <div className="formGroup">
                <label htmlFor="email" hidden>
                    Email
                </label>
                <input type="text" name="email" id="email" placeholder="Email" required/>
            </div>
            <div className="formGroup">
                <label htmlFor="message" hidden>
                    Message
                </label>
                <textarea name="message" id="message" placeholder="Message" required></textarea>
            </div>
            <input className=" hover btn" type="submit" value="Submit"/>
        </form>
    </section>
  )
}

export default Contact
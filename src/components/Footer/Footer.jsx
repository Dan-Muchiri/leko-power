import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import styles from './FooterStyles.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.infoContainer}>
                    <div className={styles.contactInfo}>
                        <h4>Contact Us</h4>
                        <p>Email: <a href="mailto:lekopowerenergy@gmail.com" className={styles.emailLink}>lekopowerenergy@gmail.com</a></p>
                        <p>Phone: +254 708 005 538</p>
                        <p>
                            <a href="https://wa.me/254708005538" target="_blank" rel="noopener noreferrer" className={styles.whatsappLink}>
                                <FontAwesomeIcon icon={faWhatsapp} className={styles.whatsappIcon} />
                                Chat with us on WhatsApp
                            </a>
                        </p>
                    </div>
                    <div className={styles.address}>
                        <h4>Our Address</h4>
                        <p>Physical Location:</p>
                        <p>Pensortium Place, 1st Floor</p>
                        <p>Ol Pogoni Road (Off Mumias Road)</p>
                        <p>P.O. Box: 25140-00100</p>
                        <p>GPO, Nairobi, Kenya</p>
                    </div>
                    <div className={styles.workingHours}>
                        <h4>Working Hours</h4>
                        <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                        <p>Saturday: 9:00 AM - 4:00 PM</p>
                        <p>Sunday & Public Holidays: Closed</p>
                    </div>
                </div>
                <div className={styles.copyright}>
                    <p>&copy; 2024 LekoPower. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

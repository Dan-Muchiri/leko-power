import React from 'react';
import styles from './FooterStyles.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.infoContainer}>
                    <div className={styles.contactInfo}>
                        <h4>Contact Us</h4>
                        <p>Email: lekoenergy@gmail.com</p>
                        <p>Phone: +254 708 005 538</p>
                    </div>
                    <div className={styles.address}>
                        <h4>Our Address</h4>
                        <p>Physical Location:</p>
                        <p>Pensortium Place, 1st Floor</p>
                        <p>Ol Pogoni Road (Off Mumias Road)</p>
                        <p>P.O. Box: 25140-00100</p>
                        <p>GPO, Nairobi, Kenya</p>
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

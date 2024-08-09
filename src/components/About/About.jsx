import React from 'react';
import styles from './AboutStyles.module.css';

function About() {
    return (
        <section className={styles.about}>
            <div className={styles.container}>
                <h1 className={styles.title}>About LekoPower</h1>
                <p className={styles.subtitle}>Empowering Kenya with Sustainable Solar Solutions</p>
                
                <div className={styles.content}>
                    <div className={styles.card}>
                        <h2 className={styles.sectionTitle}>Our Mission</h2>
                        <p className={styles.text}>
                            At LekoPower, our mission is to empower communities by providing reliable, affordable, and sustainable solar energy solutions. We aim to reduce energy costs and improve the quality of life for our customers by offering top-notch solar products, installation, and maintenance services.
                        </p>
                    </div>
                    
                    <div className={styles.card}>
                        <h2 className={styles.sectionTitle}>Our Vision</h2>
                        <p className={styles.text}>
                            We envision a future where every household and business in Kenya can access clean, renewable energy. By advancing solar technology and making it accessible to everyone, we strive to be a leader in the transition towards a greener and more sustainable world.
                        </p>
                    </div>
                    
                    <div className={styles.card}>
                        <h2 className={styles.sectionTitle}>Our Values</h2>
                        <ul className={styles.valuesList}>
                            <li><strong>Integrity:</strong> We conduct our business with the highest ethical standards, ensuring transparency and honesty in all our dealings.</li>
                            <li><strong>Quality:</strong> We are committed to providing the highest quality products and services to our customers.</li>
                            <li><strong>Innovation:</strong> We continuously seek new ways to improve and innovate in the solar energy sector.</li>
                            <li><strong>Customer Focus:</strong> Our customers are at the heart of everything we do, and we strive to exceed their expectations at every opportunity.</li>
                        </ul>
                    </div>
                    
                    <div className={styles.card}>
                        <h2 className={styles.sectionTitle}>Our Achievements</h2>
                        <p className={styles.text}>
                            Over the years, LekoPower has successfully completed over 500 solar installations across Kenya, powering homes, schools, businesses, and communities. Our commitment to quality and customer satisfaction has earned us a reputation as one of the most trusted solar providers in the region.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;

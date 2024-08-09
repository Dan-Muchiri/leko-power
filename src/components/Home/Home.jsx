import React from 'react';
import styles from './HomeStyles.module.css';
import solarImage from '../../assets/solar-8656654_1280.webp'; // Path to your image

function Home() {
    return (
        <section className={styles.home}>
            <div className={styles.hero}>
                <img src={solarImage} alt="Solar Installation" className={styles.heroImage} />
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Empowering Your Future with Solar Energy</h1>
                    <p className={styles.heroSubtitle}>Leading Provider of Solar Equipment, Installations, and Maintenance</p>
                    <a href="#products" className={styles.heroButton}>Explore Our Products</a>
                </div>
            </div>
        </section>
    );
}

export default Home;

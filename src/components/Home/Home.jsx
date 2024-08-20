import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './HomeStyles.module.css';
import solarImage from '../../assets/Untitled design.png'; // Path to your image

function Home() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top of the page
    }, []); // Empty dependency array ensures this runs only on mount
    
    const navigate = useNavigate();

    // Handler functions for navigation
    const handleExploreProducts = () => {
        navigate('/products');
    };

    const handleRequestQuote = () => {
        navigate('/contact');
    };

    return (
        <section className={styles.home}>
            <div className={styles.hero}>
                <img src={solarImage} alt="Solar Installation" className={styles.heroImage} />
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Empowering Your Future with Solar Energy</h1>
                    <p className={styles.heroSubtitle}>Leading Provider of Solar Equipment, Installations, and Maintenance</p>
                    <button onClick={handleExploreProducts} className={styles.heroButton}>
                        Explore Our Products
                    </button>
                </div>
            </div>
            <div className={styles.installationCTA}>
                <h2 className={styles.ctaTitle}>Ready to Go Solar?</h2>
                <p className={styles.ctaSubtitle}>Get a professional solar installation with our expert team. Contact us today for a custom quote and start your journey towards energy independence!</p>
                <button onClick={handleRequestQuote} className={styles.ctaButton}>
                    Request a Quote
                </button>
            </div>
        </section>
    );
}

export default Home;

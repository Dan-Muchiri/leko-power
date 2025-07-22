import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './HomeStyles.module.css';
import solarImage from '/3d-rendering-house-model.avif'; // Path to your image
import ecoFriendlyIcon from '../../assets/ecofriendlyIcon.png'; // Icon for eco-friendly
import costSavingIcon from '../../assets/costSaving.png'; // Icon for cost-saving
import reliableIcon from '../../assets/reliableIcon.png'; // Icon for reliability
import Projects from '../Projects/Projects';


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

            {/* New Section: Benefits of Going Solar */}
            <div className={styles.benefitsSection}>
                <h2 className={styles.benefitsTitle}>Why Go Solar?</h2>
                <div className={styles.benefitsGrid}>
                    <div className={styles.benefit}>
                        <img src={ecoFriendlyIcon} alt="Eco-friendly" className={styles.benefitIcon} />
                        <h3 className={styles.benefitTitle}>Eco-Friendly</h3>
                        <p className={styles.benefitDescription}>Reduce your carbon footprint and contribute to a cleaner environment.</p>
                    </div>
                    <div className={styles.benefit}>
                        <img src={costSavingIcon} alt="Cost Saving" className={styles.benefitIcon} />
                        <h3 className={styles.benefitTitle}>Cost Saving</h3>
                        <p className={styles.benefitDescription}>Save on electricity bills and enjoy long-term financial benefits.</p>
                    </div>
                    <div className={styles.benefit}>
                        <img src={reliableIcon} alt="Reliable" className={styles.benefitIcon} />
                        <h3 className={styles.benefitTitle}>Reliable Power</h3>
                        <p className={styles.benefitDescription}>Experience reliable and uninterrupted power supply, especially in remote areas.</p>
                    </div>
                </div>
            </div>

            <Projects id='work'/>
        </section>
    );
}

export default Home;

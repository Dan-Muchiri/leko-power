import React, { useState } from 'react';
import styles from './HeaderStyles.module.css';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing icons for hamburger and close

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                LekoPower
            </div>
            <div className={styles.menuIcon} onClick={toggleMenu}>
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </div>
            <nav className={`${styles.nav} ${isMenuOpen ? styles.showMenu : ''}`}>
                <a href="#home" onClick={toggleMenu}>Home</a>
                <a href="#products" onClick={toggleMenu}>Products</a>
                <a href="#about" onClick={toggleMenu}>About Us</a>
                <a href="#contact" onClick={toggleMenu}>Contact</a>
                <a href="#quote" onClick={toggleMenu}>Request a Quote</a>
            </nav>
        </header>
    );
}

export default Header;

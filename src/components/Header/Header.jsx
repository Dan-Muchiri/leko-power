import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import styles from './HeaderStyles.module.css';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing icons for hamburger and close
import logo from "../../../public/logo.png"

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={logo} alt="LekoPower Logo" className={styles.logoImage} /> {/* Updated to use the image */}
            </div>
            <div className={styles.menuIcon} onClick={toggleMenu}>
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </div>
            <nav className={`${styles.nav} ${isMenuOpen ? styles.showMenu : ''}`}>
                <Link to="/" onClick={toggleMenu}>Home</Link>
                <Link to="/products" onClick={toggleMenu}>Products</Link>
                <Link to="/about" onClick={toggleMenu}>About Us</Link>
                <Link to="/contact" onClick={toggleMenu}>Contact</Link>
            </nav>
        </header>
    );
}

export default Header;

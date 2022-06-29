import React from 'react';
import styles from "./Navbar.module.css";

const Navigation = () => {
    return (
        
             <nav className={styles.navMenu}>
            <ul>
                    <li><a href='#'>Glasses</a></li>
                    <li><a href='#'>Sunglasses</a></li>
                    <li><a href='#'>Locations</a></li>
                    <li><a href='#'>Eye Test Info</a></li>
                    <li><a href='#'>Offers</a></li>
                </ul>
        </nav>
    );
};

export default Navigation;
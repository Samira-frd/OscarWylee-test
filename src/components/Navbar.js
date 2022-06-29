import React from 'react';

//Components
import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation'

// Icons
import Logo from "../assets/OW-Logo.svg";
import Search from "../assets/search.svg";
import Shopping from "../assets/shopping.svg";
import User from "../assets/user.svg";


//Styles
import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav>
        <p className={styles.book}><span> BOOK AN EYE TEST</span></p>
        <div className={styles.container} >
            <img className={styles.logo} src={Logo} alt="logo"/>
            <div className={styles.menu}>
                <MobileNavigation/>
                <Navigation/>
            </div>
            <div className={styles.icons}>
                <span>BOOK AN EYE TEST</span>
                <img src={Search} alt="search"/>
                <img src={User} alt="user"/>
                <img src={Shopping} alt="shopping"/>
            </div>
        </div>
        </nav>
        
    );
};

export default Navbar;
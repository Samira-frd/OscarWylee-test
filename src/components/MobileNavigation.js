import React, { useState } from "react";
import styles from "./Navbar.module.css";

//icons
import { CgMenu } from "react-icons/cg";
import { CgClose } from "react-icons/cg";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const clickHandler = () => {
    setOpen(!open);
  };

  const closeMobileMenu = () => {
    setOpen(false);
  }

  const hamburgerIcon = (
    <CgMenu
      className={styles.hamburgerIcon}
      size="25px"
      color="gray"
      onClick={clickHandler}
    />
  );

  const closeIcon = (
    <CgClose
      className={styles.hamburgerIcon}
      size="25px"
      color="#fff"
      onClick={clickHandler}
    />
  );

  return (
    <nav className={styles.mobileMenu}>
        {open ? closeIcon : hamburgerIcon}
      {open && ( 
        <ul>
          <li onClick={closeMobileMenu}>
            <a href="#">Glasses</a>
          </li>
          <li onClick={closeMobileMenu}>
            <a href="#">Sunglasses</a>
          </li>
          <li onClick={closeMobileMenu}>
            <a href="#">Locations</a>
          </li>
          <li onClick={closeMobileMenu}>
            <a href="#">Eye Test Info</a>
          </li>
          <li onClick={closeMobileMenu}>
            <a href="#">Offers</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default MobileNavigation;

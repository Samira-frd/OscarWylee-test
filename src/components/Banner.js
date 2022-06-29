import React from "react";

//Styles
import styles from "./Banner.module.css";

// Icons & Images
import Glasses from "../assets/glasses.jpg";
import Zip from "../assets/zip-logo.svg";
import Blue from "../assets/blue.png";
import Brown from "../assets/brown.png";
import Yellow from "../assets/yellow.png";
import Pink from "../assets/pink.png";
import Cream from "../assets/cream.png";
import Navy from "../assets/navy.png";
import Gray from "../assets/gray.png";
import Black from "../assets/black.png";
import {BiSearchAlt} from "react-icons/bi";
import {FaCircle} from "react-icons/fa";

const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mobileTitle}>
        <h1>Gaby</h1>
        <h2>2 pairs from $199</h2>
        <p>Discount auto-applied at checkout</p>
      </div>
      <div className={styles.image}>
        <img src={Glasses} alt="glasses" />
        <p className={styles.zoom}>Zoom<span><BiSearchAlt size="20px"/></span></p>
        <div className={styles.circles}>
          <span><FaCircle size="15px" /></span>
          <span><FaCircle size="15px" color="silver"/></span>
          <span><FaCircle size="15px" color="silver"/></span>
          <span><FaCircle size="15px" color="silver"/></span>
          <span><FaCircle size="15px" color="silver"/></span>
        </div>
      </div>
      <div className={styles.text}>
        <div className={styles.title}>
          <h2>2 pairs from $199</h2>
          <p>Discount auto-applied at checkout</p>
        </div>
        <div className={styles.colors}>
          <h1>Gaby</h1>
          <p className={styles.mobileColors}>
            <span>Color:</span>Tabby Tortoise
          </p>
          <img src={Black} alt="color scheme" />
          <img src={Brown} alt="color scheme" />
          <img src={Pink} alt="color scheme" />
          <img src={Gray} alt="color scheme" />
          <img src={Blue} alt="color scheme" />
          <img src={Navy} alt="color scheme" />
          <img src={Cream} alt="color scheme" />
          <img src={Yellow} alt="color scheme" />
          <p className={styles.deskColors}>
            <span>Color:</span>Tabby Tortoise
          </p>
        </div>
        <div className={styles.payment}>
          <p className={styles.price}>From $199.00</p>
          <div className={styles.zip}>
            <p>
              or Zip it from <span> $10/week</span>with
            </p>
            <img src={Zip} alt="zip logo" />
          </div>
        </div>
        <div className={styles.buttons}>
          <button>Prescription</button>
          <button>Book an eye test</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

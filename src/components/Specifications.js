import React from "react";

// styles
import styles from "./Specifications.module.css";

const Specifications = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span>About the Frames</span>
      </h1>
      <div className={styles.specificationContainer}>
        <div className={styles.info}>
          <p>
            A classic brow-line glasses, remagined. Macro has spring Hinges and
            an adjustment nose fit for maximum comfort (and style). Now
            available in small.
          </p>
        </div>
        <div className={styles.content}>
          <h3>Made for Acetate</h3>
          <div className={styles.table}>
              <p>
                <span className={styles.tableLabel}>FRAME FIT</span>
                <span className={styles.tableValue}>WIDE</span>
              </p>
              <p>
                <span className={styles.tableLabel}>MEASURMENTs</span>
                <span className={styles.tableValue}>56 - 19 - 148</span>
              </p>
          </div>
            <p className={styles.midText}>
              These measurements mean lens width, bridge, and temple length in
              millimetres (mm). They can be found on the inside of the temple
              arm. If you already have a pair that you like, you can compare it
              to these measurements.
            </p>
          <div className={styles.text}>
            <p>
              Filter category 3 - General purpose sunglasses. High protection
              against sunglare. Good UV Protection.Not suitable for driving in
              twilight, at night or under dull conditions
            </p>
            <p>
              This frame comes with polarised lenses. An additional $100 will be
              added to your order total for prescription orders.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specifications;

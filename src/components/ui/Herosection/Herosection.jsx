import Button from "@/components/core/Button/Button.jsx";
import React from "react";
import styles from "./herosection.module.scss";

const Herosection = () => {
  return (
    <section className={`sectionPadding ${styles.heroSection}`}>
      <div className={styles.helloString}>
        <p>Hello, my name is</p>
      </div>
      <div className={styles.name}>
        <h3>Jubayer Juhan</h3>
      </div>
      <div className={styles.tagline}>
        <h3>I build things for the web.</h3>
      </div>
      <div className={styles.description}>
        <p>
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products at Upstatement.
        </p>
      </div>
      <Button title="View Resume" bigBtn className={styles.button} />
    </section>
  );
};

export default Herosection;

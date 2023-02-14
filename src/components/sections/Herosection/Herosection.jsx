import Button from "@/components/core/Button/Button.jsx";
import React from "react";
import styles from "./herosection.module.scss";
import animation from "../../../styles/Animation/slide_animation.module.scss";
import { useSelector } from "react-redux";
const Herosection = () => {
  const { siteSettings } = useSelector((state) => state.siteSettings);
  console.log(siteSettings, "site settings");
  return (
    <section className={`sectionPadding ${styles.heroSection}`}>
      <div className={`${styles.helloString} ${animation.slide_top}`}>
        <p>Hello, my name is</p>
      </div>
      <div className={`${styles.name} ${animation.slide_top}`}>
        <h3>Jubayer Juhan</h3>
      </div>
      <div className={`${styles.tagline} ${animation.slide_top}`}>
        <h3>I build things for the web.</h3>
      </div>
      <div className={`${styles.description} ${animation.slide_top}`}>
        <p>
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products at Upstatement.
        </p>
      </div>
      <Button
        title="View Resume"
        bigBtn
        className={`${styles.button} ${animation.slide_top}`}
      />
    </section>
  );
};

export default Herosection;

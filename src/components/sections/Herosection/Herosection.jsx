import Button from "@/components/core/Button/Button.jsx";
import React from "react";
import styles from "./herosection.module.scss";
import animation from "../../../styles/Animation/slide_animation.module.scss";
import { useSelector } from "react-redux";
const Herosection = () => {
  const { siteSettings } = useSelector((state) => state.siteSettings);
  return (
    <section className={`sectionPadding ${styles.heroSection}`}>
      <div className={`${styles.helloString} ${animation.slide_top}`}>
        <p>Hello, my name is</p>
      </div>
      <div className={`${styles.name} ${animation.slide_top}`}>
        <h3>{siteSettings?.heroTitle}</h3>
      </div>
      <div className={`${styles.tagline} ${animation.slide_top}`}>
        <h3>{siteSettings?.heroSubtitle}</h3>
      </div>
      <div className={`${styles.description} ${animation.slide_top}`}>
        <p>{siteSettings?.description}</p>
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

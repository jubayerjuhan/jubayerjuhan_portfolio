import React from "react";
import styles from "./sectionHeader.module.scss";

const SectionHeader = ({ title = "About Myself", className, number = 0 }) => {
  return (
    <div className={`${styles.sectionHeader} ${className}`}>
      <p className={styles.count}>0{number}.</p>
      <p className={styles.title}>{title}</p>
      <div className={styles.horizontalLine}></div>
    </div>
  );
};

export default SectionHeader;

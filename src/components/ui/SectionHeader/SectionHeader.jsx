import React from "react";
import styles from "./sectionHeader.module.scss";

const SectionHeader = ({ title = "About Myself", number = 0 }) => {
  return (
    <div className={styles.sectionHeader}>
      <p className={styles.count}>0{number}.</p>
      <p className={styles.title}>{title}</p>
      <div className={styles.horizontalLine}></div>
    </div>
  );
};

export default SectionHeader;

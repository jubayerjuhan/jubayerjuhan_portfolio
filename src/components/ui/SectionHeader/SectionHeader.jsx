import React from "react";
import styles from "./sectionHeader.module.scss";

const SectionHeader = () => {
  return (
    <div className={styles.sectionHeader}>
      <p className={styles.count}>01.</p>
      <p className={styles.title}>About Me</p>
      <div className={styles.horizontalLine}></div>
    </div>
  );
};

export default SectionHeader;

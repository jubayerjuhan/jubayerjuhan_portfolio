import React from "react";
import styles from "./dynamicScroll.module.scss";

const DynamicScroll = ({ selectedIndex }) => {
  return (
    <div
      className={styles.dynamic_scroll}
      style={{ top: `${selectedIndex * 42}px` }}
    ></div>
  );
};

export default DynamicScroll;

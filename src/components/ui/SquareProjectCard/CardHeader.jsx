import React from "react";
import { HiOutlineFolder } from "react-icons/hi";
import { FiExternalLink } from "react-icons/fi";
const CardHeader = ({ styles }) => {
  return (
    <div className={styles.cardHeader}>
      <div className={styles.icon}>
        <HiOutlineFolder />
      </div>
      <div className={styles.linkIcon}>
        <FiExternalLink />
      </div>
    </div>
  );
};

export default CardHeader;

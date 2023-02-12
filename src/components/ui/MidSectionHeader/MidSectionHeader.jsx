import Link from "next/link.js";
import React from "react";
import styles from "./MidSectionHeader.module.scss";

const MidSectionHeader = ({
  title = "Other Trustworthy Projects",
  linkTitle = "View The Archive",
}) => {
  return (
    <div className={styles.midSectionHeader}>
      <p className={styles.title}>{title}</p>
      <div className={styles.linkWrapper}>
        <Link className={styles.linkedDescription} href="/">
          {linkTitle}
        </Link>
      </div>
    </div>
  );
};

export default MidSectionHeader;

import React from "react";
import MidSectionHeader from "../../ui/MidSectionHeader/MidSectionHeader";
import SquareProjectCard from "../../ui/SquareProjectCard";
import styles from "./otherProjects.module.scss";

const OtherProjects = () => {
  return (
    <div className={`sectionPadding ${styles.otherProjects}`}>
      <MidSectionHeader styles={styles} />
      <div className={styles.projects}>
        <SquareProjectCard />
        <SquareProjectCard />
        <SquareProjectCard />
        <SquareProjectCard />
      </div>
    </div>
  );
};

export default OtherProjects;

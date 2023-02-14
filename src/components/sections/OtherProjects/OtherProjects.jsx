import React from "react";
import { useSelector } from "react-redux";
import MidSectionHeader from "../../ui/MidSectionHeader/MidSectionHeader";
import SquareProjectCard from "../../ui/SquareProjectCard";
import styles from "./otherProjects.module.scss";

const OtherProjects = () => {
  const { siteSettings } = useSelector((state) => state.siteSettings);

  return (
    <div className={`sectionPadding ${styles.otherProjects}`}>
      <MidSectionHeader styles={styles} />
      <div className={styles.projects}>
        {siteSettings.projects.map((project, key) => {
          if (project.type !== "noteworthy") return <div key={key}></div>;
          return <SquareProjectCard project={project} key={key} />;
        })}
      </div>
    </div>
  );
};

export default OtherProjects;

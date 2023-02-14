import React from "react";
import { useSelector } from "react-redux";

const Experience = ({ styles, selectedIndex }) => {
  const { siteSettings } = useSelector((state) => state.siteSettings);
  const workExperiences = siteSettings.experiences;

  return (
    <div className={styles.experience}>
      <h4 className={styles.title}>
        {workExperiences[selectedIndex]?.position}
        <span className={styles.title__company_name}>
          @ {workExperiences[selectedIndex]?.company}
        </span>
      </h4>
      <p className={styles.timeline}>
        {workExperiences[selectedIndex]?.duration}
      </p>
      <ul className={styles.taskList}>
        {workExperiences[selectedIndex]?.bullets.map((task, key) => (
          <li className={styles.task} key={key}>
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;

import React from "react";
import { workExperiences } from "../../../data/work_experience.js";

const Experience = ({ styles, selectedIndex }) => {
  return (
    <div className={styles.experience}>
      <h4 className={styles.title}>
        {workExperiences[selectedIndex]?.title}
        <span className={styles.title__company_name}>
          @ {workExperiences[selectedIndex]?.company}
        </span>
      </h4>
      <p className={styles.timeline}>{workExperiences[selectedIndex]?.time}</p>
      <ul className={styles.taskList}>
        {workExperiences[selectedIndex]?.tasks.map((task, key) => (
          <li className={styles.task} key={key}>
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;

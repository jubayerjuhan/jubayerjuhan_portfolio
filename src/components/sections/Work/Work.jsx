import React, { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader/SectionHeader.jsx";
import { workExperiences } from "../../../data/work_experience.js";
import Experience from "../../ui/Experience/Experience.jsx";
import CompanyButton from "../../core/CompanyButton/CompanyButton";
import DynamicScroll from "../../core/Dynamicscroll/DynamicScroll";
import styles from "./work.module.scss";

const Work = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleButtonClick = (key) => {
    setSelectedIndex(key);
  };

  console.log(workExperiences[selectedIndex]);
  return (
    <section className={`sectionPadding ${styles.work}`}>
      <div className={styles.workContainer}>
        <SectionHeader title={"Where I’ve Worked"} number={1} />
        <div className={styles.workExperiences}>
          <DynamicScroll selectedIndex={selectedIndex} />
          <div className={styles.companies}>
            {workExperiences.map((experience, key) => (
              <CompanyButton
                key={key}
                index={key}
                selectedIndex={selectedIndex}
                experience={experience}
                onClick={handleButtonClick}
              />
            ))}
          </div>
          <Experience styles={styles} selectedIndex={selectedIndex} />
        </div>
      </div>
    </section>
  );
};

export default Work;

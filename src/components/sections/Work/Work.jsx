import React, { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader/SectionHeader.jsx";
import { workExperiences } from "../../../data/work_experience.js";
import Experience from "../../ui/Experience/Experience.jsx";
import CompanyButton from "../../core/CompanyButton/CompanyButton";
import DynamicScroll from "../../core/Dynamicscroll/DynamicScroll";
import styles from "./work.module.scss";
import { useInView } from "react-intersection-observer";

const Work = () => {
  const { ref, inView } = useInView({ threshold: 0 });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleButtonClick = (key) => {
    setSelectedIndex(key);
  };
  return (
    <section className={`sectionPadding ${styles.work}`}>
      <div className={styles.workContainer} ref={ref}>
        <div
          className={`${styles.sectionHeader} ${
            inView && styles.sectionHeader_active
          }`}
        >
          <SectionHeader title={"Where I’ve Worked"} number={1} />
        </div>
        <div
          className={`${styles.workExperiences} ${
            inView && styles.workExperiences_inView
          }`}
        >
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

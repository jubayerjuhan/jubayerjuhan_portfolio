import SectionHeader from "@/components/ui/SectionHeader/SectionHeader.jsx";
import React from "react";
import ProjectCard from "../../ui/ProjectCard/ProjectCard";
import styles from "./thingsIBuilt.module.scss";

const ThingsIBuilt = () => {
  return (
    <section className={`sectionPadding ${styles.thingIBuilt} `}>
      <SectionHeader title={"Thing's I've Built"} number={2} />
      <div className={`${styles.builts}`}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
};

export default ThingsIBuilt;

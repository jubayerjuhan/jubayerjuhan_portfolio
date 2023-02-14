import SectionHeader from "@/components/ui/SectionHeader/SectionHeader.jsx";
import React from "react";
import ProjectCard from "../../ui/ProjectCard/ProjectCard";
import styles from "./thingsIBuilt.module.scss";
import animations from "../../../styles/Animation/slide_animation.module.scss";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";

const ThingsIBuilt = () => {
  const { ref, inView } = useInView({ threshold: 0 });
  const { siteSettings } = useSelector((state) => state.siteSettings);

  return (
    <section
      ref={ref}
      className={`sectionPadding ${styles.thingsIBuilt} ${animations.fade} `}
    >
      <div
        className={`${styles.sectionHead} ${
          inView && styles.sectionHeadActive
        }`}
      >
        <SectionHeader title={"Thing's I've Built"} number={2} />
      </div>
      <div className={`${styles.builts}`}>
        {siteSettings.projects?.map((project, key) => {
          if (project.type !== "featured") return <div key={key}></div>;
          return (
            <ProjectCard style={styles.hide} key={key} project={project} />
          );
        })}
      </div>
    </section>
  );
};

export default ThingsIBuilt;

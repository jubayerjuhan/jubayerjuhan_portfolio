import SectionHeader from "@/components/ui/SectionHeader/SectionHeader.jsx";
import React from "react";
import ProjectCard from "../../ui/ProjectCard/ProjectCard";
import styles from "./thingsIBuilt.module.scss";
import animations from "../../../styles/Animation/slide_animation.module.scss";
import { useInView } from "react-intersection-observer";

const ThingsIBuilt = () => {
  const { ref, inView } = useInView({ threshold: 0 });
  console.log(inView, "things i built");
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
        <ProjectCard style={styles.hide} />
        <ProjectCard style={styles.hide} />
        <ProjectCard style={styles.hide} />
        <ProjectCard style={styles.hide} />
      </div>
    </section>
  );
};

export default ThingsIBuilt;

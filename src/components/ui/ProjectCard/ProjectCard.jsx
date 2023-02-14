import Image from "next/image.js";
import React, { useEffect, useState } from "react";
import styles from "./projectcard.module.scss";
import projectImage from "../../../assets/project1.png";
import Link from "next/link.js";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { useInView } from "react-intersection-observer";
import { imageBuilder } from "@/utils/sanityClient.js";
const ProjectCard = ({ style: parentStyle, project }) => {
  const [alreadyAnimated, setAlreadyAnimated] = useState(false);
  const { ref, inView } = useInView({ threshold: 0 });

  useEffect(() => {
    if (inView) {
      setAlreadyAnimated(true);
    }
  }, [inView]);

  return (
    <div className={`${styles.projectCardWrapper}`} ref={ref}>
      <div
        className={`${styles.projectCard} ${
          !inView && !alreadyAnimated && parentStyle
        }`}
      >
        <div className={styles.imageWrapper}>
          <Image
            src={imageBuilder(project.thumbnail)}
            alt="Project Image"
            width={1280}
            height={720}
          />
        </div>
        <div className={styles.textWrapper}>
          <p className={styles.subtitle}>Featured Projects</p>
          <Link className={styles.title} href="/">
            {project?.name}{" "}
          </Link>
          <div className={styles.description_wrapper}>
            <p className={styles.description}>{project?.description}</p>
          </div>
          <div className={styles.techs}>
            {project.technologies.map((technology, key) => (
              <div className={styles.tech} key={key}>
                {technology.name}
              </div>
            ))}
          </div>
          <div className={styles.links}>
            <div className={styles.linkIcon}>
              <Link href={project?.githubLink} target={"_blank"}>
                <FiGithub />
              </Link>
            </div>
            <div className={styles.linkIcon}>
              <Link href={project?.liveLink} target={"_blank"}>
                <FiExternalLink />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

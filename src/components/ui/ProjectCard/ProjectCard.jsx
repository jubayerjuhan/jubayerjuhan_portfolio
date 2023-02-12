import Image from "next/image.js";
import React from "react";
import styles from "./projectcard.module.scss";
import projectImage from "../../../assets/project1.png";
import Link from "next/link.js";
import { FiExternalLink, FiGithub } from "react-icons/fi";
const ProjectCard = () => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.imageWrapper}>
        <Image src={projectImage} alt="Project Image" />
      </div>
      <div className={styles.textWrapper}>
        <p className={styles.subtitle}>Featured Projects</p>
        <Link className={styles.title} href="/">
          My Instructor - Driving School{" "}
        </Link>
        <div className={styles.description_wrapper}>
          <p className={styles.description}>
            A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm,
            and more. Available on Visual Studio Marketplace, Package Control,
            Atom Package Manager, and npm.
          </p>
        </div>
        <div className={styles.techs}>
          <div className={styles.tech}>VS Code</div>
          <div className={styles.tech}>Hyper</div>
          <div className={styles.tech}>JavaScript</div>
          <div className={styles.tech}>React</div>
          <div className={styles.tech}>Redux</div>
        </div>
        <div className={styles.links}>
          <div className={styles.linkIcon}>
            <FiGithub />
          </div>
          <div className={styles.linkIcon}>
            <FiExternalLink />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

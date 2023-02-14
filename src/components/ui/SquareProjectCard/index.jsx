import React from "react";
import CardHeader from "./CardHeader";
import styles from "./squareProjectCard.module.scss";

const SquareProjectCard = ({ project }) => {
  return (
    <div className={styles.squareProjectCard}>
      <CardHeader styles={styles} project={project} />
      <div className={styles.title}>{project.name}</div>
      <div className={styles.description}>{project.description}</div>
      <div className={styles.techs}>
        {project.technologies?.map((technology, key) => {
          return (
            <div className={styles.tech} key={key}>
              {technology?.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SquareProjectCard;

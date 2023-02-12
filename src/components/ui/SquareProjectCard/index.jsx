import React from "react";
import CardHeader from "./CardHeader";
import styles from "./squareProjectCard.module.scss";

const SquareProjectCard = () => {
  return (
    <div className={styles.squareProjectCard}>
      <CardHeader styles={styles} />
      <div className={styles.title}>
        Integrating Algolia Search with WordPress Multisite
      </div>
      <div className={styles.description}>
        Building a custom multisite compatible WordPress plugin to build global
        search with Algolia
      </div>
      <div className={styles.techs}>
        <div className={styles.tech}>Redux</div>
        <div className={styles.tech}>React</div>
      </div>
    </div>
  );
};

export default SquareProjectCard;

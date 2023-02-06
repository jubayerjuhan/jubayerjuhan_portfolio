import React from "react";
import animation from "../../../../styles/Animation/fade_animation.module.scss";
import styles from "./emailelement.module.scss";
const Emailelement = () => {
  return (
    <div className={`${styles.emailElement} ${animation.fade}`}>
      <a
        href="mailto:jubayerjuhan.info@gmail.com"
        target={"_blank"}
        rel="noreferrer"
      >
        jubayerjuhan.info@gmail.com
      </a>
      <div className={styles.placeHolder}></div>
    </div>
  );
};

export default Emailelement;

import React from "react";
import styles from "./emailelement.module.scss";
const Emailelement = () => {
  return (
    <div className={styles.emailElement}>
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

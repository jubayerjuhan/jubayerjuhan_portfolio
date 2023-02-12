import React from "react";
import styles from "./footer.module.scss";
import Button from "../../core/Button/Button";

const Footer = () => {
  return (
    <div className={`sectionPadding ${styles.footer}`}>
      <p className={styles.headerTip}>0.4 What’s Next?</p>
      <p className={styles.title}>Get In Touch</p>
      <p className={styles.description}>
        Although I’m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </p>
      <Button bigBtn title={"Say Hello"} />

      <div className={styles.developer}>
        <p>Built By Jubayer Hossain Juhan</p>
      </div>
    </div>
  );
};

export default Footer;

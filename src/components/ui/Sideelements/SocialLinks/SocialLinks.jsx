import React from "react";
import styles from "./socialLinks.module.scss";
import animation from "../../../../styles/Animation/fade_animation.module.scss";
import { socialLinks } from "../../../../data/sidebar_links.js";

const SocialLinks = () => {
  return (
    <div className={` ${animation.fade} ${styles.socialLinksWrapper}`}>
      <div className={styles.placeHolder}></div>
      <div className={styles.socialLinks}>
        {socialLinks.map((link, key) => (
          <div key={key} className={styles.socialLink}>
            <link.icon className={styles.socialLogo} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;

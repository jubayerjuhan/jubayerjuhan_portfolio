import React from "react";
import { useInView } from "react-intersection-observer";
import styles from "../../../styles/Navbar/Navbar.module.scss";

const Navlink = ({ labelKey, link }) => {
  const { ref, inView, entry } = useInView({ threshold: 0 });
  return (
    <div
      className={inView ? styles.navLinkShow : styles.navlinkHidden}
      key={labelKey}
      style={{ transitionDelay: `${labelKey + 1}00ms` }}
      ref={ref}
    >
      <p className={styles.link__title}>
        <span className={styles.link__number}>0{labelKey}.</span>
        {link.name}
      </p>
    </div>
  );
};

export default Navlink;

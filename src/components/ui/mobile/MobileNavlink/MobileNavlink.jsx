import React from "react";
import { useInView } from "react-intersection-observer";
import navStyle from "./mobileNavlink.module.scss";

const MobileNavlink = ({ navlink, styles, index: key }) => {
  const { ref, inView, entry } = useInView({ threshold: 0 });

  return (
    <div
      className={`${styles.navbarLink} ${inView && navStyle.animateNavlink}`}
      ref={ref}
      style={{ transitionDelay: `${key + 1}00ms` }}
    >
      <p>
        <span>0{key}. </span>
        {navlink.name}
      </p>
    </div>
  );
};

export default MobileNavlink;

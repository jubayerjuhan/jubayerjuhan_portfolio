import React from "react";
import styles from "./button.module.scss";
import animation from "../../../styles/Animation/slide_animation.module.scss";

const Button = ({ title = "Button", animated, style, bigBtn, className }) => {
  return (
    <button
      className={`${styles.button} ${animated && animation.slide_bottom} ${
        bigBtn && styles.bigBtn
      } ${className}`}
      style={style}
    >
      {title}
    </button>
  );
};

export default Button;

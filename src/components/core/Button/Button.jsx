import React from "react";
import styles from "./button.module.scss";
import animation from "../../../styles/Animation/slide_animation.module.scss";

const Button = ({ title = "Button", animated, style }) => {
  return (
    <button
      className={`${styles.button} ${animated && animation.slide_bottom}`}
      style={style}
    >
      {title}
    </button>
  );
};

export default Button;

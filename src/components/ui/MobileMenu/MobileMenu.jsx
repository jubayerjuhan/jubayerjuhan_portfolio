import React from "react";
import Navlink from "../Navbar/Navlink";
import Button from "../../core/Button/Button";
import { navbarLinks } from "../../../data/navbar_data.js";
import styles from "../../../styles/Navbar/Navbar.module.scss";
const MobileMenu = ({ open }) => {
  return (
    <div className={`${styles.mobileMenuWrapper}`}>
      <div className={styles.placeHolder}></div>
      <div className={open ? styles.mobileMenuShow : styles.mobileMenuHide}>
        <div className={`${styles.navLinks} ${styles.mobileMenu}`}>
          {navbarLinks.map((link, key) => (
            <Navlink key={key} link={link} labelKey={key} />
          ))}
          <Button
            title={"Resume"}
            animated
            style={{ animationDelay: "500ms" }}
          />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;

import Image from "next/image.js";
import React from "react";
import { navbarLinks } from "../../data/navbar_data.js";
import Navlink from "../Navbar/Navlink.jsx";
import logo from "../../assets/Logo.svg";
import styles from "../../styles/Navbar/Navbar.module.scss";
import animation from "../../styles/Animation/slide_animation.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoWrapper}>
        <Image
          src={logo}
          alt="Logo"
          className={`${styles.logo} ${animation.slide_bottom}`}
        ></Image>
      </div>
      <div className={styles.navLinks}>
        {navbarLinks.map((link, key) => (
          <Navlink key={key} link={link} labelKey={key} />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

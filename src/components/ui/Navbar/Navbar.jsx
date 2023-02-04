import Image from "next/image.js";
import React, { useState } from "react";
import { navbarLinks } from "../../../data/navbar_data.js";
import Navlink from "./Navlink.jsx";
import Button from "../../core/Button/Button";
import MobileMenu from "../MobileMenu/MobileMenu";
import logo from "../../../assets/Logo.svg";
import styles from "../../../styles/Navbar/Navbar.module.scss";
import animation from "../../../styles/Animation/slide_animation.module.scss";
import { BiMenuAltRight } from "react-icons/bi";
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuClick = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  console.log(mobileMenuOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoWrapper}>
        <Image
          src={logo}
          alt="Logo"
          className={`${styles.logo} ${animation.slide_bottom}`}
        ></Image>
      </div>
      <div>
        <div className={`${styles.navLinks}`}>
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
      <div className={styles.mobileMenuIcon}>
        <BiMenuAltRight size={40} onClick={handleMobileMenuClick} />
      </div>
      <MobileMenu open={mobileMenuOpen} />
    </nav>
  );
};

export default Navbar;

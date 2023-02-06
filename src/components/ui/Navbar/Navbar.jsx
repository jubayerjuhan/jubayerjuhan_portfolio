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
import { RxCross1 } from "react-icons/rx";

const Navbar = ({ setMobileMenuOpen, mobileMenuOpen }) => {
  const handleMobileMenuClick = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
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
        <BiMenuAltRight
          size={40}
          onClick={handleMobileMenuClick}
          className={`${styles.mobileMenuIcon} ${animation.slide_bottom} ${
            mobileMenuOpen
              ? styles.mobilemenuIconHide
              : styles.mobileMenuIconShow
          }`}
        />
        <RxCross1
          size={30}
          onClick={handleMobileMenuClick}
          className={`${styles.mobileMenuIcon} ${animation.slide_bottom} ${
            mobileMenuOpen
              ? styles.mobileMenuIconShow
              : styles.mobilemenuIconHide
          }`}
        />
      </nav>
    </>
  );
};

export default Navbar;

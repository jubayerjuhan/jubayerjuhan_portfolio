import styles from "./mobileMenu.module.scss";
import MobileNavlink from "../../ui/mobile/MobileNavlink/MobileNavlink.jsx";
import { navbarLinks } from "../../../data/navbar_data.js";
import Button from "@/components/core/Button/Button.jsx";

const MobileMenu = ({ open }) => {
  return (
    <div
      className={`${styles.mobileMenuWrapper} ${
        open && styles.mobileMenuVisible
      }`}
    >
      <div className={styles.placeHolder}></div>
      <div className={styles.mobileMenu}>
        {navbarLinks.map((navlink, key) => (
          <MobileNavlink
            key={key}
            index={key}
            navlink={navlink}
            styles={styles}
          />
        ))}
        <Button title="Resume" />
      </div>
    </div>
  );
};

export default MobileMenu;

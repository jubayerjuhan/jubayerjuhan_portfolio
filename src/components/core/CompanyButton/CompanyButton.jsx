import React from "react";
import styles from "./companyButton.module.scss";

const CompanyButton = ({ onClick, experience, index, selectedIndex }) => {
  return (
    <button
      className={`${styles.company_btn} ${
        index === selectedIndex && styles.company_name_active
      }`}
      onClick={() => onClick(index)}
    >
      {experience.company}
    </button>
  );
};

export default CompanyButton;

import React from "react";
import { HiOutlineFolder } from "react-icons/hi";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link.js";
const CardHeader = ({ styles, project }) => {
  return (
    <div className={styles.cardHeader}>
      <div className={styles.icon}>
        {/* <Link href={project.githubLink} target={"_blank"}> */}
        <HiOutlineFolder />
        {/* </Link> */}
      </div>
      <div className={styles.linkIcon}>
        <Link href={project.liveLink} target={"_blank"}>
          <FiExternalLink style={{ color: "var(--light-slate)" }} size={23} />
        </Link>
      </div>
    </div>
  );
};

export default CardHeader;

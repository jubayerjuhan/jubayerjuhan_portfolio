import Image from "next/image.js";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import profilePicture from "../../../assets/profile-pic.png";
import SectionHeader from "../../ui/SectionHeader/SectionHeader";
import animation from "../../../styles/Animation/slide_animation.module.scss";
import styles from "./about.module.scss";
import { useSelector } from "react-redux";
import { imageBuilder } from "@/utils/sanityClient.js";

const About = () => {
  const [showed, setShowed] = useState(false);
  const { ref, inView } = useInView({ threshold: 0 });
  const { siteSettings } = useSelector((state) => state.siteSettings);

  useEffect(() => {
    if (inView) {
      setShowed(true);
    }
  }, [inView]);

  return (
    <section className={styles.aboutWrapper}>
      <div
        className={` sectionPadding ${styles.about} ${
          (inView || showed) && styles.showAbout
        }`}
      >
        <SectionHeader />
        <div className={styles.contentWrapper}>
          <div className={styles.textSection} ref={ref}>
            <div className={styles.description}>
              <p>{siteSettings?.abouMe}</p>
              {/* <p>
                Fast-forward to today, and I’ve had the privilege of working at
                an advertising agency, a start-up, a huge corporation, and a
                student-led design studio. My main focus these days is building
                accessible, inclusive products and digital experiences at
                Upstatement for a variety of clients.
              </p>
              <p>
                I also recently launched a course that covers everything you
                need to build a web app with the Spotify API using Node & React.
              </p>
              <p>
                {" "}
                Here are a few technologies I’ve been working with recently:
              </p> */}
            </div>

            <div className={styles.skills}>
              {siteSettings.aboutMeTechnologies?.map((technology, key) => (
                <p className={styles.skill} key={key}>
                  {technology.name}
                </p>
              ))}
            </div>
          </div>
          <div className={styles.mediaSection}>
            <div className={styles.profilePicture__wrapper}>
              <Image
                // src={profilePicture}
                src={imageBuilder(siteSettings?.profilePicture)}
                width={280}
                height={280}
                alt="Jubayer Juhan Profile Picture"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import Image from "next/image.js";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import profilePicture from "../../../assets/profile-pic.png";
import SectionHeader from "../../ui/SectionHeader/SectionHeader";
import animation from "../../../styles/Animation/slide_animation.module.scss";
import styles from "./about.module.scss";

const About = () => {
  const { ref, inView } = useInView({ threshold: 0 });
  const [showed, setShowed] = useState(false);

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
              <p>
                Hello! My name is Brittany and I enjoy creating things that live
                on the internet. My interest in web development started back in
                2012 when I decided to try editing custom Tumblr themes — turns
                out hacking together a custom reblog button taught me a lot
                about HTML & CSS!{" "}
              </p>
              <p>
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
              </p>
            </div>
            <div className={styles.skills}>
              <p className={styles.skill}>Javascript</p>
              <p className={styles.skill}>React</p>
              <p className={styles.skill}>Node.js</p>
              <p className={styles.skill}>Express</p>
              <p className={styles.skill}>TypeScript</p>
              <p className={styles.skill}>Redux</p>
            </div>
          </div>
          <div className={styles.mediaSection}>
            <div className={styles.profilePicture__wrapper}>
              <Image src={profilePicture} alt="Jubayer Juhan Profile Picture" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

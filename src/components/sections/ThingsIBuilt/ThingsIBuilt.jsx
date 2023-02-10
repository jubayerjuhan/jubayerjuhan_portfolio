import SectionHeader from "@/components/ui/SectionHeader/SectionHeader.jsx";
import React from "react";
import ProjectCard from "../../ui/ProjectCard/ProjectCard";

const ThingsIBuilt = () => {
  return (
    <section className={`sectionPadding`}>
      <SectionHeader title={"Thing's I've Built"} number={2} />
      <div className="projects">
        <ProjectCard />
      </div>
    </section>
  );
};

export default ThingsIBuilt;

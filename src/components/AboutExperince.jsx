import React from "react";
import experienceData from "../assets/experienceData";
import ExperienceList from "./ExperienceList";

function AboutExperince() {
  return (
    <section className="about__experience">
      {experienceData.map((experience) => (
        <ExperienceList
          key={experience.id}
          company={experience.company}
          startDate={experience.startDate}
          endDate={experience.endDate}
          position={experience.position}
          description={experience.description}
        />
      ))}
    </section>
  );
};

export default AboutExperince;

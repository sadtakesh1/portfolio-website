import React from "react";
import {  formatText } from "../utils/formatText";

function ExperienceList({
  startDate,
  endDate,
  company,
  position,
  description,
}) {
  return (
    <div className="about__experience-item">
      <h3 className="about__experience-company">{formatText(company)}</h3>
      <div className="about__experience-group">
        <div className="about__experience-period">
          <p className="about__experience-period-item">{startDate}</p>
          <p className="about__experience-period-item">{endDate}</p>
        </div>
        <div className="about__experience-container">
          <p className="about__experience-position">{formatText(position)}</p>
          <p className="about__experience-description">{formatText(description)}</p>
        </div>
      </div>
    </div>
  );
}

export default ExperienceList;

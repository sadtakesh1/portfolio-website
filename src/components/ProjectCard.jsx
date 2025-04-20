import React from "react";
function ProjectСard({ gif, title, description }) {
  return (
    <div className="project-card">
      <img src={gif} alt={title} className="project-card__image" />
      <h3 className="project-card__title">{title}</h3>
      <p className="project-card__description">{description}</p>
    </div>
  );
}

export default ProjectСard;

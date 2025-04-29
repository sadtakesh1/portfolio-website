import React from "react";
import projectsData from "../assets/projectsData";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";

const ProjectsGallery = () => {
  return (
    <section className="projects-gallery">
      {projectsData.map((project) => (
        <Link className="projects-gallery__link" key={project.id} to={project.link}>
          <ProjectCard
            gif={project.gif}
            title={project.title}
            description={project.description}
          />
        </Link>
      ))}
    </section>
  );
};

export default ProjectsGallery;


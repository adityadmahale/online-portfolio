import React from "react";
import Card from "./card";
import ProjectModal from "./projectModal";

const Projects = ({
  projects,
  selectedProject,
  onSelect,
  renderHorizontalRule,
}) => {
  return (
    <React.Fragment>
      <h1 id="#Projects" className="gold-text">
        Projects
      </h1>
      <div className="row">
        <ProjectModal project={selectedProject} />
        {projects.map((project) => (
          <Card key={project.id} project={project} onSelect={onSelect} />
        ))}
      </div>
      {renderHorizontalRule()}
    </React.Fragment>
  );
};

export default Projects;

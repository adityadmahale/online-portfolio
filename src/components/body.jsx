import React, { Component } from "react";
import Card from "./card";
import ProjectModal from "./projectModal";
import { getProjects } from "../services/projectService";

class Body extends Component {
  state = {
    projects: [],
    selectedProject: {},
  };

  componentDidMount() {
    const projects = getProjects();
    this.setState({ projects });
  }

  handleSelect = (project) => {
    const selectedProject = { ...project };
    this.setState({ selectedProject });
  };

  render() {
    const { projects } = this.state;
    return (
      <main className="container">
        <h1 className="gold-text">Projects</h1>
        <div className="row">
          <ProjectModal project={this.state.selectedProject} />
          {projects.map((project) => (
            <Card
              key={project.id}
              project={project}
              onSelect={this.handleSelect}
            />
          ))}
        </div>
        <hr style={{ borderColor: "1px solid #7d7b64" }} />
        <h1 className="gold-text">Skills</h1>
      </main>
    );
  }
}

export default Body;

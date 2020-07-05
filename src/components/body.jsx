import React, { Component } from "react";
import Projects from "./projects";
import Experience from "./experience";
import { getProjects } from "../services/projectService";
import { getExperience } from "../services/experienceService";

class Body extends Component {
  state = {
    projects: [],
    experience: [],
    selectedProject: {},
  };

  componentDidMount() {
    const projects = getProjects();
    const experience = getExperience();
    this.setState({ projects, experience });
  }

  handleSelect = (project) => {
    const selectedProject = { ...project };
    this.setState({ selectedProject });
  };

  renderHorizontalRule = () => {
    return <hr style={{ borderColor: "1px solid #7d7b64" }} />;
  };

  render() {
    const { projects, selectedProject, experience } = this.state;
    return (
      <main className="container">
        <Experience
          experience={experience}
          renderHorizontalRule={this.renderHorizontalRule}
        />
        <Projects
          projects={projects}
          selectedProject={selectedProject}
          onSelect={this.handleSelect}
          renderHorizontalRule={this.renderHorizontalRule}
        />
      </main>
    );
  }
}

export default Body;

import React, { Component } from "react";
import Projects from "./projects";
import Experience from "./experience";
import About from "./about";
import Skills from "./skills";
import { getProjects } from "../services/projectService";
import { getExperience } from "../services/experienceService";
import { getSkills } from "../services/skillsService";

class Body extends Component {
  state = {
    projects: [],
    experience: [],
    skills: [],
    selectedProject: {},
  };

  componentDidMount() {
    const projects = getProjects();
    const experience = getExperience();
    const skills = getSkills();
    this.setState({ projects, experience, skills });
  }

  handleSelect = (project) => {
    const selectedProject = { ...project };
    this.setState({ selectedProject });
  };

  renderHorizontalRule = () => {
    return (
      <hr style={{ borderColor: "1px solid #7d7b64", marginBottom: "70px" }} />
    );
  };

  render() {
    const { projects, selectedProject, experience, skills } = this.state;
    return (
      <main className="container">
        <About renderHorizontalRule={this.renderHorizontalRule} />
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
        <Skills
          skills={skills}
          renderHorizontalRule={this.renderHorizontalRule}
        />
      </main>
    );
  }
}

export default Body;

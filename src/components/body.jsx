import React, { Component } from "react";
import About from "./about";
import Experience from "./experience";
import Education from "./education";
import Projects from "./projects";
import Skills from "./skills";
import Contact from "./contact";
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
        <Education renderHorizontalRule={this.renderHorizontalRule} />
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
        <Contact />
      </main>
    );
  }
}

export default Body;

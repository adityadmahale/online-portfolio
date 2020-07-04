import React, { Component } from "react";
import Card from "./card";
import { getProjects } from "../services/projectService";

class Body extends Component {
  state = {
    projects: [],
  };

  componentDidMount() {
    const projects = getProjects();
    this.setState({ projects });
  }

  render() {
    const { projects } = this.state;
    return (
      <main className="container">
        <h1 className="gold-text">Projects</h1>
        <div className="row">
          {projects.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </div>
        <hr style={{ borderColor: "1px solid #7d7b64" }} />
        <h1 className="gold-text">Skills</h1>
      </main>
    );
  }
}

export default Body;

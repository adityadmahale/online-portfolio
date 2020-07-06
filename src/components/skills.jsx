import React from "react";

const About = ({ renderHorizontalRule, skills }) => {
  return (
    <React.Fragment>
      <h1 id="#Skills" className="gold-text">
        Skills
      </h1>
      {skills &&
        skills.map((skill) => (
          <span key={skill} className="badge badge-pill gold text-light ml-1">
            {skill}
          </span>
        ))}
      {renderHorizontalRule()}
    </React.Fragment>
  );
};

export default About;

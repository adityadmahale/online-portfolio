import React from "react";

const About = ({ renderHorizontalRule }) => {
  return (
    <React.Fragment>
      <h1 id="#About" className="gold-text">
        About
      </h1>
      <p className="gold-text text-justify">
        I am a Senior Software Engineer with a background working effectively in
        dynamic environments. Fluent in programming languages such as Python,
        JavaScript, and Java. Proven history of developing useful and efficient
        automation frameworks. Quickly learn and master new technologies and
        working in both team and self-directed settings.
      </p>
      {renderHorizontalRule()}
    </React.Fragment>
  );
};

export default About;

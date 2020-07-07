import React from "react";

const About = ({ renderHorizontalRule }) => {
  return (
    <React.Fragment>
      <h1 id="#About" className="gold-text">
        About
      </h1>
      <p className="gold-text text-justify">
        A passionate Software Engineer with extensive experience in IT
        Automation. Proficient in programming languages such as Python,
        JavaScript, and Java. Well acquainted with PostgreSQL database, Cloud
        Computing, and Container technologies. Known for creating and
        implementing efficient automation frameworks. Possess strong verbal and
        written communication skills and have exposure to client communications
        as part of project management.
      </p>
      {renderHorizontalRule()}
    </React.Fragment>
  );
};

export default About;

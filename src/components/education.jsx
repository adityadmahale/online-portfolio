import React from "react";

const Education = ({ renderHorizontalRule }) => {
  return (
    <React.Fragment>
      <h1 id="#Education" className="gold-text">
        Education
      </h1>
      {renderHorizontalRule()}
    </React.Fragment>
  );
};

export default Education;

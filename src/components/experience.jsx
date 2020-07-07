import React from "react";
import RowComponent from "./common/rowComponent";

const Experience = ({ experience, renderHorizontalRule }) => {
  return (
    <React.Fragment>
      <h1 id="#Experience" className="gold-text">
        Experience
      </h1>
      <RowComponent rows={experience} />
      {renderHorizontalRule()}
    </React.Fragment>
  );
};

export default Experience;

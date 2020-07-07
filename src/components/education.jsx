import React from "react";
import RowComponent from "./common/rowComponent";

const Education = ({ education, renderHorizontalRule }) => {
  return (
    <React.Fragment>
      <h1 id="#Education" className="gold-text">
        Education
      </h1>
      <RowComponent rows={education} />
      {renderHorizontalRule()}
    </React.Fragment>
  );
};

export default Education;

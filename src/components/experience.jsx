import React from "react";

const Experience = ({ experience, renderHorizontalRule }) => {
  return (
    <React.Fragment>
      <h1 id="#Experience" className="gold-text">
        Experience
      </h1>
      <div className="row">
        {experience.map((exp) => {
          return (
            <div
              key={exp.id}
              className="row p-2 m-3 border-block-left gold-text"
            >
              <div className="col-12 col-md-9">
                <h4 className="silver-text">{exp.designation}</h4>
                <h6>{exp.company}</h6>
                <ul>
                  {exp.description &&
                    exp.description.map((point) => (
                      <li className="text-justify" key={point.id}>
                        {point.description}
                      </li>
                    ))}
                </ul>
              </div>
              <div className="col-12 col-md-3 duration silver-text">
                {exp.duration}
              </div>
            </div>
          );
        })}
      </div>
      {renderHorizontalRule()}
    </React.Fragment>
  );
};

export default Experience;

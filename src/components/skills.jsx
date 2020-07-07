import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const About = ({ renderHorizontalRule, skills }) => {
  return (
    <React.Fragment>
      <h1 id="#Skills" className="gold-text">
        Skills
      </h1>
      <div className="row">
        {skills.map((skill) => {
          return (
            <div key={skill.id} className="col-12 col-md-3">
              <div
                className="card"
                style={{
                  boxShadow: "4px 4px 2px 2px rgba(153, 151, 125, 0.4)",
                }}
              >
                <div className="card-header" style={{ padding: "50px" }}>
                  <CircularProgressbar
                    strokeWidth={5}
                    value={skill.profiency}
                    text={`${skill.profiency}%`}
                    styles={buildStyles({
                      pathColor: "#7d7b64",
                      textColor: "#7d7b64",
                    })}
                  />
                </div>

                <div className="card-body">
                  <h5 className="card-title gold-text">{skill.domain}</h5>
                  {skill.names &&
                    skill.names.map((s) => (
                      <span
                        key={s}
                        className="badge badge-pill text-light gold ml-2"
                      >
                        {s}
                      </span>
                    ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {renderHorizontalRule()}
    </React.Fragment>
  );
};

export default About;

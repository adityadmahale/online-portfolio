import React from "react";

const ProjectModal = ({ project }) => {
  const { title, description, skills } = project;
  return (
    <div className="modal fade" id="myModal" role="dialog">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header gold text-light">
            <h4 className="modal-title">{title}</h4>
            <button type="button" className="close" data-dismiss="modal">
              &times;
            </button>
          </div>
          <div className="modal-body gold-text">
            <p className="text-justify">{description}</p>
            <h5>Skills</h5>
            {skills &&
              skills.map((skill) => (
                <span
                  key={skill}
                  className="badge badge-pill gold text-light ml-1"
                >
                  {skill}
                </span>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;

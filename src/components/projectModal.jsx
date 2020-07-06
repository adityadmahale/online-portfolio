import React from "react";

const ProjectModal = ({ project }) => {
  const { title, description, skills, associatedCertificates } = project;
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
            {description &&
              description.map((desc) => (
                <p key={desc.id} className="text-justify">
                  {desc.point}
                </p>
              ))}
            {associatedCertificates && (
              <React.Fragment>
                {associatedCertificates.length > 1 ? (
                  <h5 className="silver-text">Associated Certificates:</h5>
                ) : (
                  <h5 className="silver-text">Associated Certificate:</h5>
                )}
                {associatedCertificates.map((cert) => (
                  <p key={cert.id}>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gold-text"
                    >
                      {cert.label} <i className="fa fa-external-link"></i>
                    </a>
                  </p>
                ))}
              </React.Fragment>
            )}
            <h5 className="silver-text">Skills:</h5>
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

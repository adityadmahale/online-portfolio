import React from "react";

const Card = ({ project, onSelect }) => {
  const { image, title, link } = project;
  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <div
        className="card"
        style={{ boxShadow: "4px 4px 2px 2px rgba(153, 151, 125, 0.4)" }}
      >
        <img className="card-img-top" src={image} alt={title} />
        <div className="card-body">
          <h5 className="card-title gold-text">{title}</h5>

          <div className="row">
            <div className="col">
              <button
                type="button"
                className="btn gold text-light"
                onClick={() => onSelect(project)}
                data-toggle="modal"
                data-target="#myModal"
              >
                Show info
              </button>
            </div>
            <div className="col justify-content-center align-self-center">
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gold-text"
                >
                  See project <i className="fa fa-external-link"></i>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

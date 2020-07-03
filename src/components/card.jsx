import React from "react";

const Card = (props) => {
  const { imageSource, title, link } = props.project;
  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <div
        className="card"
        style={{ boxShadow: "4px 4px 2px 2px rgba(153, 151, 125, 0.4)" }}
      >
        <img className="card-img-top" src={imageSource} alt={title} />
        <div className="card-body">
          <h5 className="card-title gold-text">{title}</h5>

          <div className="row">
            <div className="col">
              <a href="#" className="btn gold text-light">
                Show info
              </a>
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

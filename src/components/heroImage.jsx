import React from "react";

const HeroImage = () => {
  const basePath = process.env.PUBLIC_URL + "/profile.jpg";
  return (
    <div
      className="jumbotron"
      style={{
        backgroundImage: `linear-gradient(to right,rgba(0, 0, 0, 0.9),rgba(181, 166, 127, 0.3)),url('${basePath}')`,
      }}
    >
      <div className="hero-text">
        <h1 style={{ fontSize: "5rem" }}>Aditya Mahale</h1>
        <p>Senior Software Engineer</p>
        <i className="fa fa-chevron-down mt-2" aria-hidden="true"></i>
      </div>
    </div>
  );
};

export default HeroImage;

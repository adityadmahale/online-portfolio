import React from "react";

const RowComponent = ({ rows }) => {
  return (
    <div className="row">
      {rows.map((data) => {
        return (
          <div
            key={data.id}
            className="row p-2 m-3 border-block-left gold-text"
          >
            <div className="col-12 col-md-9">
              <h4 className="silver-text">{data.title}</h4>
              <h6>{data.subtitle}</h6>
              <ul>
                {data.description &&
                  data.description.map((point) => (
                    <li className="text-justify" key={point.id}>
                      {point.description}
                    </li>
                  ))}
              </ul>
            </div>
            <div className="col-12 col-md-3 duration silver-text">
              {data.duration}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RowComponent;

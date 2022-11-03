import React from "react";
import "./index.scss";

export default function Card(props) {
  const { data } = props;
  return (
    <section className="card-container">
      <div className="card-container-image-container">
        <img
          src={data.photo}
          className="card-container-image-container-image"
        />
      </div>
      <div className="card-container-text"></div>
    </section>
  );
}

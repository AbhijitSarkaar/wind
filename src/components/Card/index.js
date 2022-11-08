import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
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
      <div className="card-container-text">
        {data.superHost && (
          <div className="card-container-text-super-host-tag">Super Host</div>
        )}
        <div className="card-container-text-space">{data.type}</div>
        <div className="card-container-text-bed-count">{data.beds} beds</div>
        <div className="card-container-text-rating-text">
          <FontAwesomeIcon icon={faStar} color={"#EB5757"} />
          <div>{data.rating}</div>
        </div>
      </div>
      <div className="card-container-title">{data.title}</div>
    </section>
  );
}

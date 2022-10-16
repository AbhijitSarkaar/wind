import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./index.scss";

export default function Searchbar(props) {
  const { location, guest } = props;

  return (
    <section className="searchbar-container">
      <div className="text-content">{location || "Add Location"}</div>
      <div className="text-content">{guest || "Add guests"}</div>
      <div className="search-icon">
        <FontAwesomeIcon icon={faSearch} />
      </div>
    </section>
  );
}

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClose,
  faLocationPin,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import "./index.scss";
import { useState } from "react";

export default function SearchModal() {
  const [locations, setLocations] = useState([
    "Helsinki, Finland",
    "Turku, Finland",
    "Oulu, Finland",
    "Vaasa, Finland",
  ]);

  const [guests, setGuests] = useState([
    {
      name: "Adults",
      description: "Age 13 or above",
      count: 0,
    },
    {
      name: "Children",
      description: "Age 2 - 12",
      count: 0,
    },
  ]);

  return (
    <div className="search-modal-container">
      <div className="search-modal-container-top-bar">
        <div>Edit your search</div>
        <FontAwesomeIcon icon={faClose} />
      </div>
      <div className="search-modal-container-filters">
        <div className="search-modal-container-filters-filter">
          <div className="search-modal-container-filters-filter-title">
            LOCATION
          </div>
          <div className="search-modal-container-filters-filter-value">
            Add location
          </div>
        </div>
        <div className="search-modal-container-filters-line"></div>
        <div className="search-modal-container-filters-filter">
          <div className="search-modal-container-filters-filter-title">
            GUESTS
          </div>
          <div className="search-modal-container-filters-filter-value">
            Add guests
          </div>
        </div>
      </div>
      <div className="search-modal-container-filter-content">
        <div className="search-modal-container-filter-content-locations">
          {locations.map((item) => {
            return (
              <div className="search-modal-container-filter-content-locations-location">
                <FontAwesomeIcon icon={faLocationPin} />
                {item}
              </div>
            );
          })}
        </div>
        {/* <div className="search-modal-container-filter-content-guests">
          {guests.map((item) => (
            <div className="search-modal-container-filter-content-guests-guest">
              <div className="search-modal-container-filter-content-guests-guest-type">
                {item.name}
              </div>
              <div className="search-modal-container-filter-content-guests-guest-description">
                {item.description}
              </div>
              <div className="search-modal-container-filter-content-guests-guest-count">
                <div className="search-modal-container-filter-content-guests-guest-count-operation">
                  -
                </div>
                <div className="search-modal-container-filter-content-guests-guest-count-value">
                  {item.count}
                </div>
                <div className="search-modal-container-filter-content-guests-guest-count-operation">
                  +
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
      <div className="search-modal-container-button">
        <FontAwesomeIcon icon={faSearch} />
        Search
      </div>
    </div>
  );
}

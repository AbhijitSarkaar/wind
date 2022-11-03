import React from "react";
import Card from "../Card";
import "./index.scss";

export default function CardList(props) {
  const { data } = props;
  const item = {
    city: "Helsinki",
    country: "Finland",
    superHost: false,
    title: "Stylist apartment in center of the city",
    rating: 4.4,
    maxGuests: 3,
    type: "Entire apartment",
    beds: 2,
    photo:
      "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80",
  };
  return (
    <section className="card-list-container">
      <Card data={item} />
      {/* {data.map((item) => (
        <Card data={item} key={item.photo} />
      ))} */}
    </section>
  );
}

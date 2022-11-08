import React from "react";
import Card from "../Card";
import "./index.scss";

export default function CardList(props) {
  const { data } = props;
  return (
    <section className="card-list-container">
      {data.map((item) => (
        <Card data={item} key={item.photo} />
      ))}
    </section>
  );
}

import React from "react";
import CardList from "../CardList";
import Header from "../Header";
import TextContent from "../TextContent";
import data from "../../data/stays.json";
import "./index.scss";

const App = () => {
  return (
    <section>
      <Header></Header>
      <TextContent />
      <CardList data={data}></CardList>
    </section>
  );
};

export default App;

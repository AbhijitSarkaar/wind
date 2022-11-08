import React from "react";
import CardList from "../CardList";
import Header from "../Header";
import TextContent from "../TextContent";
import data from "../../data/stays.json";
import SearchModal from "../SearchModal";
import "./index.scss";

const App = () => {
  return (
    <section className="app-container">
      <Header></Header>
      <TextContent />
      <CardList data={data}></CardList>
      <SearchModal />
    </section>
  );
};

export default App;

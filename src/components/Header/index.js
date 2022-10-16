import React from "react";
import Searchbar from "../Searchbar";
import Logo from "../../assets/logo.png";
import "./index.scss";

const Header = () => {
  return (
    <section className="header-container">
      <img src={Logo} alt="logo" className="logo-image" />
      <Searchbar />
    </section>
  );
};

export default Header;

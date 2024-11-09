import React from "react";

import Navigation from "../Navigation/Navigation";

import css from "./AppBar.module.css";
import logo from "../../assets/images/logo.svg"

export default function AppBar () {

  return (
    <header className={css.appBar}>
      <div className="mainContainer">
        <div className={css.headerContainer}>
          <div className={css.logo}>
            <img src={logo} alt="logo" />
          </div>
          <Navigation />
        </div>
      </div>
    </header>
  );
};



import React from "react";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.homePage}>
      <h1>Welcome to the Home Page</h1>
      <p>This is the starting point of the app.</p>
    </div>
  );
}


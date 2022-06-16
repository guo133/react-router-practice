import React from "react";
import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import "./style.css";

export const App = () => {
  return (
    <div className="App">
      <Home />
      <Page1 />
      <Page2 />
    </div>
  );
};

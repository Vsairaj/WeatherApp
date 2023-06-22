import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { weatherServer } from "./server";

if (process.env.NODE_ENV === "development") {
  weatherServer();
}

ReactDOM.render(<App />, document.getElementById("root"));

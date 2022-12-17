import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import * as ReactDOMClient from "react-dom/client";
import App from "./App";
import "./styles.scss";

const mountNode = ReactDOMClient.createRoot(document.getElementById("app"));
mountNode.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import "./styles.css";
import { CryptoApp } from "./CryptoApp";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
        <CryptoApp></CryptoApp>
    </BrowserRouter>
  </React.StrictMode>
);

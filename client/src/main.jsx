import React from "react";
import ReactDOM from "react-dom/client";
import Reviews from "./Reviews";
import "./index.css";
import Home from "./pages/Home";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App>
        <Navbar />
        <Cards />
        <Reviews />
        <Home />
      </App>
    </BrowserRouter>
  </React.StrictMode>
);

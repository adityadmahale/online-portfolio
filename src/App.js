import React from "react";
import HeroImage from "./components/heroImage";
import NavBar from "./components/navBar";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <HeroImage />
    </BrowserRouter>
  );
}

export default App;

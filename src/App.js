import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Footer />
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./compoents/home/Home";
import Footer from "./compoents/footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

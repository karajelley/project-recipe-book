import React from "react";
import Navbar from "./components/Nav-Bar/NavBar";
import Footer from "./components/Footer-map/Footer";
import Content from "./components/content/Content";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="main-section">
        <Content />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}
export default App;

import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import SideBar from "./components/SideBar";
import Content from "./components/Content";
import "./App.css";
function App() {
  return (
    <>
      <Navbar />
      <section id="contact"></section>
      <div>
        <Content />
      </div>
      <Footer />
    </>
  );
}
export default App;

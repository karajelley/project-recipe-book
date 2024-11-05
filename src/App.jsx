import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import SideBar from "./components/SideBar";
import "./App.css";
function App() {
  return (
    <>
      <Navbar />
      <section id="recipe-book"></section>
      <section id="recipes"></section>
      <section id="about"></section>
      <section id="contact"></section>
      <SideBar />
      <Footer />
    </>
  );
}
export default App;

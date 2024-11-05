import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Footer from "./components/footer";
function App() {
  return (
    <>
      <Navbar />
      <section id="recipes"></section>
      <section id="about"></section>
      <section id="contact"></section>



    <Footer />
    </>
  );
}
export default App;

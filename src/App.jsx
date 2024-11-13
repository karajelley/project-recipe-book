import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav-Bar/NavBar";
import Footer from "./components/Footer-map/Footer";
import SideBar from "./components/Side-Bar/SideBar";
import AllRecipesPage from "./pages/AllRecipesPage";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import RecipeDetailsPage from "./pages/RecipeDetailsPage";
import recipeData from "./data/data.json";
import { useState } from "react";
import "./App.css";


function App() {
  const [data, setData] = useState(recipeData)

  
  return (
    <>
      <Navbar />
      <div>
        <SideBar />
        <Routes>
          <Route path="/" element={<AllRecipesPage data={data} setData = {setData}/>}  />
          <Route path="/About" element={<AboutPage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route
            path="/recipe/:id"
            element={<RecipeDetailsPage data={data} />}
          />
{/*           <Route
            path="/edit-recipe/:id"
            element={<EditRecipePage data={data} />}
          /> */}
        </Routes>
      </div>
      <Footer />
    </>
  );
}
export default App;

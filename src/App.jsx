import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav-Bar/NavBar";
import Footer from "./components/Footer-map/Footer";
import Content from "./components/content/Content";
import SideBar from "./components/Side-Bar/SideBar";


import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
{/*         <Route path="/" element={<AllRecipesPage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="*" element={<ErrorPage />} /> */}
  {/*     <Route path="/RecipeDetailsPage/:recipeID" element={<?? />} /> */}
      </Routes>
      {/* <form>
  <span>Create a recipe</span>
  <div class="form-group">
    <label>
      Title
      <input name="Title" type="text" placeholder="Tasty Treats" />
    </label>

    <label>
      Calories
      <input name="Calories" type="number" placeholder="0" />
    </label>

    <label>
      Servings
      <input name="Servings" type="number" placeholder="0" />
    </label>

    <label>
      Image URL
      <input name="Image Url" type="url" placeholder="URL Here" />
    </label>

    <label>
      Description
      <input name="Description" type="text" placeholder="Describe the recipe" />
    </label>

    <label>
      Recipe
      <textarea name="Recipe" placeholder="Insert recipe here"></textarea>
    </label>

    <button type="submit">Create Recipe</button>
  </div>
</form> */}
      <div className="main-section">
        <SideBar />
        
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}
export default App;

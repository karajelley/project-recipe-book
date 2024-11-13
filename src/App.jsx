import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav-Bar/NavBar";
import Footer from "./components/Footer-map/Footer";
import SideBar from "./components/Side-Bar/SideBar";
import AllRecipesPage from "./pages/AllRecipesPage";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import RecipeDetailsPage from "./pages/RecipeDetailsPage";
import recipeData from "./data/data.json";
import "./App.css";

function App() {
  // Initialize `data` with `recipeData`
  const [data, setData] = useState(recipeData);

  // On component mount, load recipes from localStorage if available
  useEffect(() => {
    const savedRecipes = JSON.parse(localStorage.getItem("recipes"));
    if (savedRecipes && savedRecipes.length > 0) {
      setData(savedRecipes);
    }
  }, []);

  // Keep `localStorage` updated with changes to `data`
  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(data));
  }, [data]);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    calories: "",
    image: "",
    servings: "",
    description: "",
    preparation: "",
    ingredients: ""
  });

  // Handle form input changes
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Check for required fields
    if (!formData.name || !formData.calories || !formData.servings || !formData.ingredients) {
      alert("Please fill in all required fields.");
      return;
    }

    const newRecipe = {
      ...formData,
      id: Date.now().toString(),
      ingredients: formData.ingredients.split(",").map((ingredient) => ingredient.trim())
    };

    const updatedRecipes = [...data, newRecipe];
    setData(updatedRecipes);
    setFormData({
      name: "",
      calories: "",
      image: "",
      servings: "",
      description: "",
      preparation: "",
      ingredients: ""
    }); // Reset form
  };

  return (
    <>
      <Navbar />
      <div>
        <SideBar />
        <Routes>
          <Route
            path="/"
            element={
              <AllRecipesPage
                data={data}
                setData={setData}
                formData={formData}
                handleFormChange={handleFormChange}
                handleFormSubmit={handleFormSubmit}
              />
            }
          />
          <Route path="/About" element={<AboutPage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/recipe/:id" element={<RecipeDetailsPage data={data} />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;

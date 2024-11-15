import "../pages/RecipeDetails.css";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom"; // This import is not used, consider removing it
import { useState } from "react";
import { Link } from "react-router-dom"; // when we have more than one Component or hook from the same library, we can import them in a single line
// import { Link, useParams } from "react-router-dom";
import EditForm from "../components/Recipe-form/EditForm";

function RecipeDetailsPage({ data , setData}) {
  const { id } = useParams(); // good job using useParams to get the id from the URL 💪
  const recipe = data.find((recipe) => recipe.id === id); // super clean implementation 👍

  const [isEditing, setIsEditing] = useState(false);

  const [servings, setServings] = useState(recipe.servings);
  const [calories, setCalories] = useState(recipe.calories);

  const handleIncreaseServings = () => {
    const newServings = servings + 1;
    setServings(newServings);
    setCalories((recipe.calories / recipe.servings) * newServings);
  };

  const handleDecreaseServings = () => {
    if (servings > 1) { 
      const newServings = servings - 1;
      setServings(newServings);
      setCalories((recipe.calories / recipe.servings) * newServings);
    }
  };

  return (
<div className="details-container">
<Link className="back-link" to="/">Back  </Link> 
  {!isEditing ? (      
        <article>
          <section>

        <div className="details-buttons">
          <h3>{recipe.name} - Recipe:</h3>
          <button className="edit-button" onClick={() => setIsEditing(!isEditing)}>Edit Recipe</button>
        </div>

        <div className="prep-container">
        <p>Description: {recipe.description}</p>
        <p>Ingredients: {recipe.ingredients.join(", ")}</p>
        <p>Prep: {recipe.preparation}</p>
        </div>

        <div className="servings-controls">
          <p>Calories: {calories}</p>
          <p >Servings: {servings}</p>
          <button className="decrease-button" onClick={handleDecreaseServings}>-</button>
          <button className="increase-button" onClick={handleIncreaseServings}>+</button>
          </div>
          </section>
        
    
      <img className="images" src={recipe.image} alt={recipe.name} />
        
      </article>
) : (
  <article>
  <EditForm recipe={recipe} setData={setData} />

</article>
)}



    </div>
  );
}

export default RecipeDetailsPage;

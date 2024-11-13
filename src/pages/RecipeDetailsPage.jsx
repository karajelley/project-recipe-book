import "../pages/RecipeDetails.css";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function RecipeDetailsPage({ data }) {
  const { id } = useParams();
  const recipe = data.find((recipe) => recipe.id === id);

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
      <article>
        <h3>{recipe.name} - Recipe:</h3>
        <p>Description: {recipe.description}</p>
        <p>Ingredients: {recipe.ingredients.join(", ")}</p>
        <p>Prep: {recipe.preparation}</p>
        <p>Servings: {servings}</p>

        <div className="servings-controls">
          <button onClick={handleDecreaseServings}>-</button>
          <button onClick={handleIncreaseServings}>+</button>
        </div>

        <p>Calories: {calories}</p>
        <img src={recipe.image} alt={recipe.name} />
        
        <NavLink to={`/edit-recipe/${id}`}>
          <button>Edit</button>
        </NavLink>
      </article>
    </div>
  );
}

export default RecipeDetailsPage;

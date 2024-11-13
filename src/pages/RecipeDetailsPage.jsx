import "../pages/RecipeDetails.css";

import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

function RecipeDetailsPage({ data }) {
  const { id } = useParams();
  const recipe = data.find((recipe) => recipe.id === id);

  return (
    <div className="details-container">
        <article>
          <h3>{recipe.name} - Recipe: </h3>
          <p>Description: {recipe.description}</p>
          <p>Ingredients: {recipe.ingredients}</p>
          <p>Prep: {recipe.preparation}</p>
          <p>Amount of Calories: {recipe.calories}</p>
          <p>Servings: {recipe.servings}</p>
          <img src={recipe.image} alt={recipe.name} />  
        <NavLink to={`/edit-recipe/${id}`}> 
          <button> Edit</button>
        </NavLink>
        </article>

      
      
    </div>
  );
}

export default RecipeDetailsPage;

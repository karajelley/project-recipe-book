import "../pages/RecipeDetails.css";
import EditForm from "../components/Edit-Form/EditForm";

import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";


function RecipeDetailsPage({ data, setData }) {
  const { id } = useParams();
  const recipe = data.find((recipe) => recipe.id === id);

  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="details-container">
        {!isEditing ? (
          <article>
            <h3>{recipe.name} - Recipe: </h3>
            <p>Description: {recipe.description}</p>
            <p>Ingredients: {recipe.ingredients}</p>
            <p>Prep: {recipe.preparation}</p>
            <p>Amount of Calories: {recipe.calories}</p>
            <p>Servings: {recipe.servings}</p>
            <img src={recipe.image} alt={recipe.name} />  
            <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
          </article>
        ) : (
          <article>
            <EditForm recipe={recipe} setData={setData} />
            <button onClick={() => setIsEditing(!isEditing)}>Cancel</button>
          </article>
        )}
        <Link to="/">Back</Link>
    </div>
  );
}

export default RecipeDetailsPage;

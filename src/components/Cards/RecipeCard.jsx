import { NavLink } from "react-router-dom";
import "./RecipeCard.css";


function RecipeCard({
  food: { id, name, calories, servings, image },
  deleteRecipe,
}) {
  return (
    <>
      <div className="recipe-card">
        <img src={image} alt="" />
        <h3>{name}</h3>
        <p>{calories}</p>
        <p>{servings} person</p>
        <p>
          {" "}
          <NavLink to={`/recipe/${id}`}>Go to Recipe</NavLink>
        </p>
        <div className="low-calories">
          {" "}
          {calories <= 350 && <p>Low-Cal</p>}{" "}
        </div>
        <button
          onClick={() => {
            deleteRecipe(id);
          }}
        >
          🗑️
        </button>
      </div>
    </>
  );
}

export default RecipeCard;

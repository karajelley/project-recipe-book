import { NavLink } from "react-router-dom";
import "./RecipeCard.css";


function RecipeCard({
  food: { id, name, calories, servings, image },
  deleteRecipe,
}) {
  return (
    <>
        <NavLink to={`/recipe/${id}`}>
      <div className="recipe-card">
        <button
          onClick={() => {
            deleteRecipe(id);
          }}
        >
          X
        </button>
        <img src={image} alt="" />
          <div className="low-calories">
          {calories <= 350 && <p>Low-Cal</p>}
          </div>
          <h3>{name}</h3>
          <p>{calories}</p>
          <p>{servings} person</p>
          </div>
        </NavLink>
    </>
  );
}

export default RecipeCard;

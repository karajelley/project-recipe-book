import { NavLink } from "react-router-dom";
import "./RecipeCard.css";


function RecipeCard({
  food: { id, name, calories, servings, image },
  deleteRecipe,
}) {
  return (
    <>
        <div className="recipe-card">
          <div className="upper-part-card">
          <button className="delete-button"
            onClick={() => {
              deleteRecipe(id);
            }}
          >
            X
          </button>
            {calories <= 350 && (
              <img className="low-cal-image" src="/src/assets/low-cal-image.png"></img>
            )}
          </div>
          <img src={image} alt="" />
          <h3>{name}</h3>
          <p>Calories: {calories}</p>
          <p>Recipe for: {servings} person</p>

          <NavLink to={`/recipe/${id}`}>
            <button className="details-button">
              Go to Recipe
            </button>
          </NavLink>
        </div>
    </>
  );
}

export default RecipeCard;

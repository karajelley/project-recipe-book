import "./RecipeForm.css";
import { useState } from "react";
import data from "/src/data/data.json";

function RecipeForm() {
  const [selectedDish, setSelectedDish] = useState(null);
  const [servings, setServings] = useState(1);
  const [calculatedCalories, setCalculatedCalories] = useState(0);
  const [dishDetails, setDishDetails] = useState(null);

  const handleDishChange = (event) => {
    const dishId = event.target.value;
    const dish = data.find((item) => item.id === dishId);
    if (dish) {
      setSelectedDish(dish);
      setServings(dish.servings);
      setCalculatedCalories(dish.calories * dish.servings);
    } else {
      setSelectedDish(null);
      setServings(1);
      setCalculatedCalories(0);
    }
  };

  const handleServingsChange = (newServings) => {
    if (selectedDish && newServings > 0) {
      setServings(newServings);
      setCalculatedCalories(selectedDish.calories * newServings);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedDish) {
      setDishDetails({
        ingredients: selectedDish.ingredients,
        preparation: selectedDish.preparation,
      });
    }
  };

  return (
    <>
      <div className="container">
        <div className="form-wrapper">
          <form onSubmit={handleSubmit}>
            <label htmlFor="dish-select">Create your recipe </label>
            <select
              id="dish-select"
              onChange={handleDishChange}
              defaultValue=""
            >
              <option value="">--select dish--</option>
              {data.map((dish) => (
                <option key={dish.id} value={dish.id}>
                  {dish.name}
                </option>
              ))}
            </select>

            {selectedDish && (
              <div>
                <div>
                  <label>Dish:</label>
                  <input type="text" value={selectedDish.name} readOnly />
                </div>
                <div>
                  <label>Calories:</label>
                  <input type="number" value={calculatedCalories} readOnly />
                </div>
                <div>
                  <label>Servings:</label>
                  <button
                    type="button"
                    onClick={() => handleServingsChange(servings - 1)}
                    disabled={servings <= 1}
                  >
                    -
                  </button>
                  <input type="number" value={servings} readOnly />
                  <button
                    type="button"
                    onClick={() => handleServingsChange(servings + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            )}

            <button type="submit">Submit</button>

            {/* ingredients and preparation after submission */}
            {dishDetails && (
              <div>
                <h2>Ingredients:</h2>
                <ul>
                  {dishDetails.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
                <h2>Preparation:</h2>
                <p>{dishDetails.preparation}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default RecipeForm;

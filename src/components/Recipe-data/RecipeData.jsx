import recipeData from "/src/data/data.json";
import RecipeCard from "../Cards/RecipeCard";
import { useState } from "react";
import "../Recipe-data/RecipeData.css";
import { NavLink } from "react-router-dom";

function Data() {
    const [data, setData] = useState(recipeData);
    function deleteRecipe(recipe) {
        const filterData = data.filter(food => food.id !== recipe)
        return setData(filterData);
    }
    return (
        <div className="recipe-data">
            {data.map((food) => {
                return<RecipeCard key={food.id} food={food} deleteRecipe={deleteRecipe} />
            })}

        </div>
    )
}
export default Data;

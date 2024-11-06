import recipeData from "../data/data.json"
import {useState} from "react"
import RecipeCard from "./RecipeCard";
import "../components/Data.css"

function Data() {

    return (
        <div className="recipe-data">
            {recipeData.map((food) => {
                return <RecipeCard key={food.id} food = {food}/>
            })}
        </div>
    )
}

export default Data;
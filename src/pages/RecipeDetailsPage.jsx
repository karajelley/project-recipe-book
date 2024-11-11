import "../pages/RecipeDetails.css"

import { useParams } from "react-router-dom";


function RecipeDetailsPage({ data }) {

    const { id } = useParams();
    const recipe = data.find((recipe) => recipe.id === id)

    if (!recipe) {
        return <div>Recipe not found</div>
    }

    return (
        <div className="details-container">
            <h3>{recipe.name} - Recipe: </h3>
            <p>Amount of Calories: {recipe.calories}</p>
            <p>Amounts for: {recipe.servings}</p>
            <img src={recipe.image} alt={recipe.name}/>
        </div>
    )

}

export default RecipeDetailsPage;
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
            <img src={recipe.image} alt={recipe.name}/>
            <h3>{recipe.name}</h3>
            <p>{recipe.calories}</p>
            <p>{recipe.servings}</p>
        </div>
    )

}

export default RecipeDetailsPage;

import RecipeData from "../components/Recipe-data/RecipeData"
import "./AllRecipesPage.css"
import RecipeForm from "../components/Recipe-form/RecipeForm";

function AllRecipesPage() {


    return (
        <div className="recipes-container">
        <RecipeData />
        <RecipeForm />
      </div>
    );
}

export default AllRecipesPage;
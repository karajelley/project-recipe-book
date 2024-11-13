import "./AllRecipesPage.css";
import RecipeForm from "../components/Recipe-form/RecipeForm";
import RecipeCard from "../components/Cards/RecipeCard.jsx";

function AllRecipesPage({ data, setData, formData, handleFormChange, handleFormSubmit }) {
  return (
    <div className="container">
      <div className="recipes-container">
        {data.map((food) => (
          <RecipeCard key={food.id} food={food} deleteRecipe={(id) => setData(data.filter((recipe) => recipe.id !== id))} />
        ))}
      </div>
      <div className="form-container">
        <RecipeForm
          formData={formData}
          handleFormChange={handleFormChange}
          handleFormSubmit={handleFormSubmit}
        />
      </div>
    </div>
  );
}

export default AllRecipesPage;

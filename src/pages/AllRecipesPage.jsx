/* 
import RecipeData from "../components/Recipe-data/RecipeData" */
import "./AllRecipesPage.css"
import RecipeForm from "../components/Recipe-form/RecipeForm";
import RecipeCard from "../components/Cards/RecipeCard.jsx"

function AllRecipesPage( {data, setData} ) {
  
  return (
      <div className="container">
      <div className="recipes-container">
        {data.map((food) => {
          return <RecipeCard key={food.id} food={food} data={data} setData={setData}/>
        })}
      </div>
      <div className="form-container">
        <RecipeForm />
      </div>
      </div>
    );
}

export default AllRecipesPage;
import "../components/RecipeCard.css"


function RecipeCard({
    food: { name, calories, servings, image}
  }) {
    return (
      <div className="recipe-card">
        <img width={100} src={image} alt="" />
        <h3>{name}</h3>
        <p>{calories}</p>
        <p>{servings} people</p>
      </div>
    );
}


export default RecipeCard;
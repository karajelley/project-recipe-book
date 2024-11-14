import { useNavigate } from "react-router-dom";
import { useState } from "react";
//import "./EditForm.css";

function EditForm( {recipe, setData} ) {

    const [name, setName] = useState(recipe.name);
    const [calories, setCalories] = useState(recipe.calories);
    const [image, setImage] = useState(recipe.image);
    const [servings, setServings] = useState(recipe.servings);
    const [description, setDescription] = useState(recipe.description);
    const [preparation, setPreparation] = useState(recipe.preparation);
    const [ingredients, setIngredients] = useState(recipe.ingredients);


    const navigate = useNavigate();
   
    /* const recipeId = recipe.id */



    function handleSubmit(e) {
        e.preventDefault();

        recipe.name = name;
        recipe.calories = calories;
        recipe.image = image;
        recipe.servings = servings;
        recipe.description = description;
        recipe.preparation = preparation;
        recipe.ingredients = ingredients;
/*         recipe.id = id; */
    


        setData((prev) => [...prev]);
        console.log("UPDATED Recipe: ", recipe);

  /*       navigate(`/recipe/${recipeId}`); */
        navigate("/");
       /*  navigate(`/recipe/${id}`); */
    }


    return (
        <form onSubmit={handleSubmit}>

            <div>
                <label htmlFor="name">Recipe Name</label>
                <input
                value={name}
                type="text"
                id="name"
                name="name"
                onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="calories">Calories</label>
                <input
                value={calories}
                type="text"
                id="calories"
                name="calories"
                onChange={(e) => setCalories(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="image">Image</label>
                <input
                value={image}
                type="text"
                id="image"
                name="image"
                onChange={(e) => setImage(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="servings">Servings</label>
                <input
                value={servings}
                type="text"
                id="servings"
                name="servings"
                onChange={(e) => setServings(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="description">Description</label>
                <input
                value={description}
                type="text"
                id="description"
                name="description"
                onChange={(e) => setDescription(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="preparation">Preparation</label>
                <input
                value={preparation}
                type="text"
                id="preparation"
                name="preparation"
                onChange={(e) => setPreparation(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="ingredients">Ingredients</label>
                <input
                value={ingredients}
                type="text"
                id="ingredients"
                name="ingredients"
                onChange={(e) => setIngredients(e.target.value)}
                />
            </div>

              <button type="submit">Done</button>
        </form>
    )

}

export default EditForm;
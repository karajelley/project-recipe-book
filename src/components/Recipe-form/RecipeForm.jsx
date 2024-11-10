
function RecipeForm() {
  return (

<form>
  <span>Create a recipe</span>
  <div class="form-group">
    <label>
      Title
      <input name="Title" type="text" placeholder="Tasty Treats" />
    </label>

    <label>
      Calories
      <input name="Calories" type="number" placeholder="0" />
    </label>

    <label>
      Servings
      <input name="Servings" type="number" placeholder="0" />
    </label>

    <label>
      Image URL
      <input name="Image Url" type="url" placeholder="URL Here" />
    </label>

    <label>
      Description
      <input name="Description" type="text" placeholder="Describe the recipe" />
    </label>

    <label>
      Recipe
      <textarea name="Recipe" placeholder="Insert recipe here"></textarea>
    </label>

    <button type="submit">Create Recipe</button>
  </div>
</form>
    )
}

export default RecipeForm


import React from "react";

function RecipeForm({ formData, handleFormChange, handleFormSubmit }) {
  return (
    <form onSubmit={handleFormSubmit}>
      <input
        name="name"
        value={formData.name}
        onChange={handleFormChange}
        placeholder="Recipe Name"
        required
      />
      <input
        name="calories"
        type="number"
        value={formData.calories}
        onChange={handleFormChange}
        placeholder="Calories"
        required
      />
      <input
        name="image"
        value={formData.image}
        onChange={handleFormChange}
        placeholder="Image URL"
      />
      <input
        name="servings"
        type="number"
        value={formData.servings}
        onChange={handleFormChange}
        placeholder="Servings"
        required
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleFormChange}
        placeholder="Description"
      />
      <textarea
        name="preparation"
        value={formData.preparation}
        onChange={handleFormChange}
        placeholder="Preparation Steps"
      />
      <input
        name="ingredients"
        value={formData.ingredients}
        onChange={handleFormChange}
        placeholder="Ingredients (comma separated)"
        required
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
}

export default RecipeForm;

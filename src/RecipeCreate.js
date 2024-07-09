import React, { useState } from "react";

function RecipeCreate({recipes, setRecipes}) {
  
  const emptyRecipeDataState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
    actions: ""
  }
  const [recipeData, setRecipeData] = useState({...emptyRecipeDataState})
  
  const handleChange = ({target}) => {
    setRecipeData({...recipeData, [target.name]: target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setRecipes([...recipes, recipeData])
    setRecipeData({...emptyRecipeDataState})
  }

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td><input type="text" id="name" name="name" value={recipeData.name} placeholder="Name" onChange={handleChange} required></input></td>
            <td><input type="text" id="cuisine" name="cuisine" value={recipeData.cuisine} placeholder="Cuisine" onChange={handleChange} required></input></td>
            <td><input type="url" id="photo" name="photo" value={recipeData.photo} placeholder="Photo" onChange={handleChange} required></input></td>
            <td><textarea type="text" id="ingredients" name="ingredients" value={recipeData.ingredients} placeholder="Ingredients" onChange={handleChange} required rows={10}></textarea></td>
            <td><textarea type="text" id="preparation" name="preparation" value={recipeData.preparation} placeholder="Preparation" onChange={handleChange} required rows={10}></textarea></td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;

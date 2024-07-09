import React, { useState } from "react";

function RecipeList({recipes, setRecipes}) {
  
  const [editIndex, setEditIndex] = useState(null)
  const [editRecipe, setEditRecipe] = useState({})

  // set content after clicking edit
  const handleEdit = (index) => {
    setEditIndex(index)
    // set content acc to what was originally saved
    setEditRecipe({...recipes[index]})
  }

  // hold the updated recipe content
  const handleRecipeUpdate = (event) => {
    const {name, value} = event.target
    //replaces the value according to target.name
    setEditRecipe({...editRecipe, [name]: value})
  }
  
  const handleSave = ({target}) => {
    // if index is the target, replace the whole recipe
    const updatedRecipes = recipes.map((recipe, index) => (
      index === editIndex ? {...recipe, ...editRecipe} : recipe
    ))
    setRecipes(updatedRecipes)
    setEditIndex(null)
    setEditRecipe({})
  }

  const handleCancel = () => {
    setEditIndex(null)
    setEditRecipe({})
  }

  const handleDelete = (indexToDelete) => {
    setRecipes(recipes.filter((_,index) => (
      index !== indexToDelete
    )))
  }

  return (
    <div className="recipe-list">
      <table>
      <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe, index) => (
             editIndex === index ? (
              <tr key={index}>
                <td><input type="text" id="name" name="name" value={editRecipe.name} onChange={handleRecipeUpdate} required></input></td>
                <td><input type="text" id="cuisine" name="cuisine" value={editRecipe.cuisine} onChange={handleRecipeUpdate} required></input></td>
                <td><input type="url" id="photo" name="photo" value={editRecipe.photo} onChange={handleRecipeUpdate} required></input></td>
                <td><textarea type="text" id="ingredients" name="ingredients" value={editRecipe.ingredients} onChange={handleRecipeUpdate} required rows={10}></textarea></td>
                <td><textarea type="text" id="preparation" name="preparation" value={editRecipe.preparation} onChange={handleRecipeUpdate} required></textarea></td>
                <td>
                  <button onClick={handleSave}>Save</button>
                  <button onClick={handleCancel}>Cancel</button>
                </td>
              </tr>
            ):(
              <tr key={index}>
                <td>{recipe.name}</td>
                <td>{recipe.cuisine}</td>
                <td className="image-container">
                  <img src={recipe.photo} alt={`Photo of ${recipe.name}`} />
                </td>
                <td>{recipe.ingredients}</td>
                <td>{recipe.preparation}</td>
                <td>
                  <button name="delete" onClick={() => handleDelete(index)}>Delete</button>
                  <button name="edit" onClick={() => handleEdit(index)}>Edit</button>
                </td>
              </tr>
            )
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;

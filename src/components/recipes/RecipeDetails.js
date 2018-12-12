import React from 'react';

export default function RecipeDetails (props) {
  console.log(props.recipe)
  return (
    <div key={props.recipe.id}>
      <h2>Name: {props.recipe.name}</h2>
      <p>Cooking Time: {props.recipe.cookingTime}</p>
      <p>Instruction: {props.recipe.instruction}</p>
      <p>{props.recipe.image}</p>
    </div>
  )
}
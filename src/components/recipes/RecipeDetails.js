/* import React from 'react';

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
} */


import React from 'react';
import './RecipeDetails.css'

export default function RecipeDetails (props) {
  console.log(props.recipe)
  if (props.recipe === null) return <h1>Loading ...</h1>

  return (
    <div className="meal container" key={props.recipe.id}>
      <b className="meal"> {props.recipe.name.toUpperCase()}</b>
      <div className="ratings">
        <i className="material-icons">star_border star_border star_border star_border star_border</i>
      </div>
      <div>
        <button className="favorites">ADD TO FAVOURITE</button>
        <button className="shopping">ADD TO SHOPPING LIST</button>
      </div>
      <div>
        <p><i className="material-icons">person</i>SERVES {props.recipe.serves}</p>
        <span><i className="material-icons">access_time</i>{props.recipe.cookingTime} MINUTES</span>
        <p>DIETARY OPTION: {props.recipe.dietary.toUpperCase()}</p>
        <p>ALLERGIES</p>
        <b>NUTRITIONAL INFORMATION</b>
        <div>
          <button className="nutritionButtons">INFO 000 <hr/> 00% </button>
          <button className="nutritionButtons">INFO 000 <hr/> 00% </button>
          <button className="nutritionButtons">INFO 000 <hr/> 00% </button>
          <button className="nutritionButtons">INFO 000 <hr/> 00% </button>
          
        </div>
        <div className="image">
          <img src={props.recipe.image} alt="meal" width='548px' />
        </div>
        <hr/>
      </div>
      <div className="row">
        <ul className="col s6">
          <b>INGREDIENTS</b>
            {props.recipe.recipeIngredients.map(ingredient => {
              return (
                <div key={ingredient.id}>
                  <li>{ingredient.quantity} {ingredient.unit.name} {ingredient.ingredient.name}</li>
                </div>
              )
            })}
        </ul>
        <ol className="col s6">
          <b>PREPARATION STEPS</b>
            <p>{props.recipe.instructions}</p>
            
        </ol>
      </div>

    </div>
  )
}



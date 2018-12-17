
import React from 'react';
import './RecipeDetails.css'

export default function RecipeDetails (props) {
  
  if (props.recipe === null) return <h1>Loading ...</h1>
  if (props.user === null) return <h1>Loading ...</h1>
  
  

  return (
    <div className="meal container" key={props.recipe.id}>
      <b className="meal"> {props.recipe.name.toUpperCase()}</b>
      <div className="ratings">
        <i className="material-icons">star_border star_border star_border star_border star_border</i>
      </div>
      <div>
        <button className="add-planner">ADD TO THE PLANNER</button>
        <button className="favorites">ADD TO FAVOURITE</button>
        <button className="shopping">ADD TO SHOPPING LIST</button>
      </div>
      <div>
        
        <p>SERVES {''}<b>{props.user.adultsNumber}</b><i className="material-icons">person</i> {''} <b>{props.user.childrenNumber}</b><i className="material-icons"> <span> person</span></i> </p> 
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
          <img src={props.recipe.image} alt="meal" width='548px'/>
        </div>
        <hr/>
      </div>
      <div className="row">
        <ul className="col s6">
          <b>INGREDIENTS</b>
            {props.recipe.recipeIngredients.map(ingredient => {
              return (
                <div key={ingredient.id}>
                  <li>{ingredient.quantity * (props.user.adultsNumber + (0.5 * props.user.childrenNumber))} {ingredient.unit.name} {ingredient.ingredient.name}</li>
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



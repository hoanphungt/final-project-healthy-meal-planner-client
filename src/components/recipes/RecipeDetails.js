
import React from 'react';
import './RecipeDetails.css'

export default function RecipeDetails(props) {

  if (props.recipe === null || props.user === null) return <h1>Loading ...</h1>

  return (

    <div className='meal-details' key={props.recipe.id}>
      <div className='left-image'>
        <b className="meal"> {props.recipe.name.toUpperCase()}</b>
        <div className="ratings">
          <i className="material-icons">star_border star_border star_border star_border star_border</i>
        </div>
        <div>
          <button className="add-planner">ADD TO THE PLANNER</button>
          <button className="favorites">ADD TO FAVOURITE</button>
          <button className="shopping" onClick={props.addToShoppingList}>ADD TO SHOPPING LIST</button>
        </div>
        <div className='meal-information'>
          <p>SERVES <b>{props.user.adultsNumber}</b><i className="material-icons">person</i> <b>{props.user.childrenNumber}</b><i className="material-icons"> <span> person</span></i> </p>
          <span><i className="material-icons">access_time</i>{props.recipe.cookingTime} MINUTES</span>
          <p>DIETARY OPTION: {props.recipe.dietary.toUpperCase()}</p>
          <p>ALLERGIES</p>
          <b style={{marginTop: '20px'}}>NUTRITIONAL INFORMATION</b>
          <div>
            <button className="nutritionButtons">INFO 000 <hr /> 00% </button>
            <button className="nutritionButtons">INFO 000 <hr /> 00% </button>
            <button className="nutritionButtons">INFO 000 <hr /> 00% </button>
            <button className="nutritionButtons">INFO 000 <hr /> 00% </button>
          </div>
        </div>
      </div>

      <div className="image">
        <img src={props.recipe.image} alt="meal" />
      </div>
      <hr />

      <ul className='ingredient-preparation'>
        <li className='ingredient'>
          <div className='ingre-prep'><b className="caption">INGREDIENTS</b></div>
          {props.recipe.recipeIngredients.map(ingredient => {
            return <ul key={ingredient.id}>
              <li className='ingredient-list'>{ingredient.quantity * (props.user.adultsNumber + (0.5 * props.user.childrenNumber))} {ingredient.unit.name} {ingredient.ingredient.name}</li>
            </ul>
          })}
        </li>
        <li className='preparation'>
          <div className='ingre-prep'><b className="caption">PREPARATION STEPS</b></div>
          <ol>
            <li className='preparation-list'>{props.recipe.instructions}</li>
          </ol>          
        </li>
      </ul>
    </div>
  )
}



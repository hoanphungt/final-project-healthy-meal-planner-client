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
        <p><i className="material-icons">person</i>SERVES 3</p>
        <span><i className="material-icons">access_time</i>3O MINUTES</span>
        <p>DIETARY OPTION</p>
        <p>ALLERGIES</p>
        <b>NUTRITIONAL INFORMATION</b>
        <div>
          <button className="nutritionButtons">INFO 000 <hr/> 00% </button>
          <button className="nutritionButtons">INFO 000 <hr/> 00% </button>
          <button className="nutritionButtons">INFO 000 <hr/> 00% </button>
          <button className="nutritionButtons">INFO 000 <hr/> 00% </button>
          
        </div>
        <div className="image">
          <img src="https://www.seriouseats.com/recipes/images/2016/08/20160827-cherry-tomato-pasta-13-1500x1125.jpg" alt="image" width='548px' />
        </div>
        <hr/>
      </div>
      <div className="row">
        <ul className="col s6">
          <b>INGREDIENTS</b>
            <li>2 Cloves Of Garlic</li>
            <li>1/2 Bunch Of Fresh Basil</li>
            <li>Olive Oil</li>
            <li>1x400G Of Plum Tomatoes</li>
        </ul>
        <ol className="col s6">
          <b>PREPARATION STEPS</b>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed justo quis enim faucibus pellentesque.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed justo quis enim faucibus pellentesque.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed justo quis enim faucibus pellentesque.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed justo quis enim faucibus pellentesque.</li>
            
        </ol>
      </div>

    </div>
  )
}



import React from 'react'
import { Link } from 'react-router-dom'

export const RecipeList = (props) => {
    console.log(props.recipes)

    if (props.recipes === null) return <h1>Loading ...</h1>

    return (
        <div>
            <h1>ALL RECIPES</h1>
            <ol>
                {props.recipes.map(recipe => {
                    return (
                        <li key={recipe.id}>
                            <h4><Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link></h4>
                            <p><img alt='foodie' src={recipe.image} /></p>
                            <i>Cooking Time: {recipe.cookingTime}</i>
                            <p>Instruction: {recipe.instruction}</p>
                        </li>
                    )                    
                })}
            </ol>
            
        </div>
    )
}
import React from 'react'
import { Link } from 'react-router-dom'
import './RecipeList.css'

export const RecipeList = (props) => {
    console.log(props.recipes)

    if (props.recipes === null) return <h1>Loading ...</h1>

    return (
        <div className='row'>
            <div className='col s5'>
                <h1>SEARCH FOR</h1>
                <h2>MEAL TIME</h2>
                <div className='checkbox'>
                    <input type='checkbox' />
                    <span class="checkmark">Breakfast</span><br></br>
                    <input type='checkbox' />
                    <span class="checkmark">Lunch</span><br></br>
                    <input type='checkbox' />
                    <span class="checkmark">Dinner</span><br></br>
                    <input type='checkbox' />
                    <span class="checkmark">Snack</span><br></br>
                </div>
                <h2>DIETARY PREFERENCES</h2>
                <div className='checkbox'>
                    <input type='checkbox' />
                    <span class="checkmark">Vegetarian</span><br></br>
                    <input type='checkbox' />
                    <span class="checkmark">Vegan Meal</span><br></br>
                    <input type='checkbox' />
                    <span class="checkmark">Gluten-Free</span><br></br>
                    <input type='checkbox' />
                    <span class="checkmark">Lactose-Free</span><br></br>
                    <input type='checkbox' />
                    <span class="checkmark">Kosher</span><br></br>
                    <input type='checkbox' />
                    <span class="checkmark">Low Sodium</span><br></br>
                    <input type='checkbox' />
                    <span class="checkmark">Pregnant-Nursiring</span><br></br>
                </div>
                <h2>COOKING TIME</h2>
                <div className='checkbox'>
                    <input type='checkbox' />
                    <span class="checkmark">15 Minutes</span><br></br>
                    <input type='checkbox' />
                    <span class="checkmark">15 to 30 Minutes</span><br></br>
                    <input type='checkbox' />
                    <span class="checkmark">30 to 45 Minutes</span><br></br>
                    <input type='checkbox' />
                    <span class="checkmark">More than 45 Minutes</span><br></br>
                </div>
                <h2>SKILL LEVEL</h2>
                <div className='checkbox'>
                    <input type='checkbox' />
                    <span class="checkmark">Beginner</span><br></br>
                    <input type='checkbox' />
                    <span class="checkmark">Intermediate</span><br></br>
                    <input type='checkbox' />
                    <span class="checkmark">Advanced</span><br></br>
                </div>
            </div>
            <ul className='col s6'>
                {props.recipes.map(recipe => {
                    return (
                        <li key={recipe.id} className='recipe'>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZQoE0L43jH6eh5DxXUaT7TPzIzjb2OcxiXyAcMFqIprusSCkCKw' width='200px' height='160px' />
                            <h3 style={{ fontWeight: 'bold' }}>NAME OF THE MEAL</h3>
                            <span>COOKING TIME</span><br></br>
                            <i class="small material-icons">star_border star_border star_border star_border star_border</i><br></br>
                            <span>NUTRITION INFO</span><br></br>
                            <button className='change-button'>CHANGE</button>
                            <button className='add-to-shopping-list-button'>ADD TO LIST</button>
                        </li>
                    )
                })}
            </ul>

        </div>
    )
}
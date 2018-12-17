import React from 'react'
// import { Link } from 'react-router-dom'
import './RecipeList.css'

export const RecipeList = (props) => {
    if (props.recipes === null) return <h1>Loading ...</h1>

    return (
        <div className='row'>
            <div className='col s3'>
                <h1>SEARCH FOR</h1>
                <h2>MEAL TIME</h2>
                <div className='checkbox'>
                    <label className='checkbox'>
                        <input type='checkbox' />
                        <span className="checkmark">Breakfast</span><br></br>
                    </label>
                    <label className='checkbox'>
                        <input type='checkbox' />
                        <span className="checkmark">Lunch</span><br></br>
                    </label>
                    <label className='checkbox'>
                        <input type='checkbox' />
                        <span className="checkmark">Dinner</span><br></br>
                    </label>
                    <label className='checkbox'>
                        <input type='checkbox' />
                        <span className="checkmark">Snacks</span><br></br>
                    </label>
                </div>
                <h2>DIETARY PREFERENCES</h2>
                <div className='checkbox'>
                    <label className='checkbox'>
                        <input type='checkbox' />
                        <span className="checkmark">Vegetarian</span><br></br>
                    </label>
                    <label className='checkbox'>
                        <input type='checkbox' />
                        <span className="checkmark">Vegan Meal</span><br></br>
                    </label>
                    <label className='checkbox'>
                        <input type='checkbox' />
                        <span className="checkmark">Gluten-Free</span><br></br>
                    </label>
                    <label className='checkbox'>
                        <input type='checkbox' />
                        <span className="checkmark">Lactose-Free</span><br></br>
                    </label>
                    <label className='checkbox'>
                        <input type='checkbox' />
                        <span className="checkmark">Kosher</span><br></br>
                    </label>
                    <label className='checkbox'>
                        <input type='checkbox' />
                        <span className="checkmark">Low Sodium</span><br></br>
                    </label>
                    <label className='checkbox'>
                        <input type='checkbox' />
                        <span className="checkmark">Pregnant-Nursiring</span><br></br>
                    </label>
                </div>
                <h2>COOKING TIME</h2>
                <div className='checkbox'>
                    <label className='checkbox'>
                        <input type='checkbox' />
                        <span className="checkmark">15 Minutes</span><br></br>
                    </label>
                    <label className='checkbox'>
                        <input type='checkbox' />
                        <span className="checkmark">15 to 30 Minutes</span><br></br>
                    </label>
                    <label className='checkbox'>
                        <input type='checkbox' />
                        <span className="checkmark">30 to 45 Minutes</span><br></br>
                    </label>
                    <label className='checkbox'>
                        <input type='checkbox' />
                        <span className="checkmark">More than 45 Minutes</span><br></br>
                    </label>
                </div>
                <h2>SKILL LEVEL</h2>
                <div className='checkbox'>
                    <label className='checkbox'>
                        <input type='checkbox' />
                        <span className="checkmark">Beginner</span><br></br>
                    </label>
                    <label className='checkbox'>
                        <input type='checkbox' />
                        <span className="checkmark">Intermediate</span><br></br>
                    </label>
                    <label className='checkbox'>
                        <input type='checkbox' />
                        <span className="checkmark">Advanced</span><br></br>
                    </label>
                </div>
            </div>
            <ul className='col s8'>
                {props.recipes.map(recipe => {
                    return (
                        <li key={recipe.id} className='recipe'>
                            <img alt='meal' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZQoE0L43jH6eh5DxXUaT7TPzIzjb2OcxiXyAcMFqIprusSCkCKw' width='200px' height='160px' />
                            <h3 style={{ fontWeight: 'bold' }}>NAME OF THE MEAL</h3>
                            <span>COOKING TIME</span><br></br>
                            <i className="small material-icons">star_border star_border star_border star_border star_border</i><br></br>
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
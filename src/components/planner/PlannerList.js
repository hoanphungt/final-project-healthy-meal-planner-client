import React from 'react'
import { Link } from 'react-router-dom'

export const PlannerList = (props) => {
    if (props.planner === null) return <h1>Loading ...</h1>

    return (
        <div className='planner'>
            <h1 className='planner-title'>YOUR WEEKLY PLANNER</h1>
            <ul><li>BREAKFAST</li><li>LUNCH</li><li style={{fontWeight: 'bold'}}>DINNER</li><li>SNACK</li></ul>
            <div><button className='button'>Add all to Shopping List</button></div>
            
            <ul className='planner-recipes'>
                {props.planner.map(day => {
                    return (
                        <li className='planner' key={day.id}>
                            <Link to={`./recipes/${day.recipe.id}`}><img alt='meal' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZQoE0L43jH6eh5DxXUaT7TPzIzjb2OcxiXyAcMFqIprusSCkCKw' width='200px' height='160px'/></Link>
                            <h3 style={{fontWeight: 'bold'}}>{day.recipe.name.toUpperCase()}</h3>
                            <span>COOKING TIME: {day.recipe.cookingTime} MINUTES</span><br></br>
                            <i className="small material-icons">star_border star_border star_border star_border star_border</i><br></br>
                            <span>NUTRITION INFO</span><br></br>
                            <button className='change-button'>CHANGE</button>
                            <button className='add-to-shopping-list-button'>ADD TO LIST</button>
                        </li>
                    )
                })}
                <li className='add-button'>
                    <a className="btn-floating btn-large grey" href='/recipes'><i className="material-icons">add</i></a>
                </li>
            </ul>
        </div>
    )
}
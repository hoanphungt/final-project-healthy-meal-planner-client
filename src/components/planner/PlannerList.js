import React from 'react'
import { Link } from 'react-router-dom'

export const PlannerList = (props) => {
  if (props.planner === null) return <h1>Loading ...</h1>

    return (
        <div className='planner'>
            <div className="planner-title">
                <span className="previous" onClick={ () => {props.onClick({offset : props.offset-7})} } ><div className="material-icons">chevron_left</div> Previous Week </span>
                <span className="title1">YOUR WEEKLY PLANNER</span>
                <span className="next" onClick={ () => {props.onClick({offset : props.offset+7})} } > Next Week <div className="material-icons">chevron_right</div></span>
            </div>

            <ul className='meal-time'><li>BREAKFAST</li><li>LUNCH</li><li style={{fontWeight: 'bold'}}>DINNER</li><li>SNACK</li></ul>
            <div><button className='button' onClick={props.addAllToShoppingList}>ADD ALL TO SHOPPING LIST</button></div>
            <ul className='planner-recipes'>
                {props.planner.planner.map(day => {
                    return (
                        <li className='planner' key={day.id}>
                            <Link to={`/recipes/${day.recipe.id}`}><img alt='meal' src={day.recipe.image} width='200px' height='160px' /></Link>
                            <h3 style={{ fontWeight: 'bold' }}>{day.recipe.name.toUpperCase()}</h3>
                            <span>COOKING TIME: {day.recipe.cookingTime} MINUTES</span><br></br>
                            <div className="ratings">
                                <i className="small material-icons">star_border star_border star_border star_border star_border</i><br></br>
                            </div>
                            <button className='change-button'>CHANGE</button>
                            <button className='add-to-shopping-list-button' onClick={() => props.addToShoppingList(day.recipe)}>ADD TO LIST</button>
                        </li>
                    )
                })}
                <li className='add-button'>
                    <Link to = {'/recipes'} className="btn-floating btn-large"><i className="material-icons">add</i></Link>
                </li>
            </ul>

            

        </div>
    )
}
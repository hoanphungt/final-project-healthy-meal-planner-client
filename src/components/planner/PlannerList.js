import React from 'react'
import { Link } from 'react-router-dom'

export const PlannerList = (props) => {
    console.log(props.planner)

    if (props.planner === null) return <h1>Loading ...</h1>

    return (
        <div>
            <h1>YOUR WEEKLY PLANNER</h1>
            <h4>DINNER</h4>
            <button>Add all to Shopping List</button>
            <div className='row'>
                {props.planner.map(menu => {
                    return (
                        <div className='col s2'>
                            <h4>Day {menu.id}: <Link to={`/recipes/${menu.recipe.id}`}>{menu.recipe.name}</Link></h4>
                        </div>
                    )
                })}
                
        

            </div>
            <a className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></a>
        </div>
    )
}
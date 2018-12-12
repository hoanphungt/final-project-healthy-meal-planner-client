import React from 'react'
import { Link } from 'react-router-dom'

export const PlannerList = (props) => {
    console.log(props.planner)

    if (props.planner === null) return <h1>Loading ...</h1>

    return (
        <div>
            <h1>YOUR WEEKLY PLANNER</h1>
            <button>Add all to Shopping List</button>
            <ol>
                {props.planner.map(menu => {
                    return (
                        <div key={menu.id}>
                            <h4>Day {menu.id}: <Link to={`/planner/${menu.recipe.id}`}>{menu.recipe.name}</Link></h4>
                        </div>
                    )                    
                })}
            </ol>
            
        </div>
    )
}
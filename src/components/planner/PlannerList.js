import React from 'react'
import { Link } from 'react-router-dom'
import { bold } from 'ansi-colors';

export const PlannerList = (props) => {
    console.log(props.planner)

    if (props.planner === null) return <h1>Loading ...</h1>

    return (
        <div>
            <h1>YOUR WEEKLY PLANNER</h1>
            <h4>DINNER</h4>
            <button className='button'>Add all to Shopping List</button>
            {/* <div className='row'>
                {props.planner.map(menu => {
                    return (
                        <div className='col s2'>
                            <h4>Day {menu.id}: <Link to={`/recipes/${menu.recipe.id}`}>{menu.recipe.name}</Link></h4>
                        </div>
                    )
                })}
            </div> */}
            <ul>
                {props.planner.map(menu => {
                    return (
                        <li className='planner' key={menu.id}>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZQoE0L43jH6eh5DxXUaT7TPzIzjb2OcxiXyAcMFqIprusSCkCKw' width='200px' height='160px'/>
                            <h3 style={{fontWeight: 'bold'}}>NAME OF THE MEAL</h3>
                            <span>COOKING TIME</span><br></br>
                            <i class="small material-icons">star_border star_border star_border star_border star_border</i><br></br>
                            <span>NUTRITION INFO</span><br></br>
                            <button className='change-button'>CHANGE</button>
                            <button className='add-to-shopping-list-button'>ADD TO LIST</button>
                        </li>
                    )
                })}
                <li className='add-button'>
                    <a className="btn-floating btn-large grey"><i className="material-icons">add</i></a>
                </li>
            </ul>
        </div>
    )
}
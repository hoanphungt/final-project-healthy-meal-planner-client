import React from 'react'
import { Link } from 'react-router-dom'
import { bold } from 'ansi-colors';

export const PlannerList = (props) => {
    console.log(props.planner)

    if (props.planner === null) return <h1>Loading ...</h1>

    return (
        <div>
            <h1 className='planner-list'>YOUR WEEKLY PLANNER</h1>
            <ul><li>BREAKFAST</li><li>LUNCH</li><li style={{fontWeight: 'bold'}}>DINNER</li><li>SNACK</li></ul>
            <div><button className='button'>Add all to Shopping List</button></div>
            <ul>
                {props.planner.map(menu => {
                    return (
                        <li className='planner' key={menu.id}>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZQoE0L43jH6eh5DxXUaT7TPzIzjb2OcxiXyAcMFqIprusSCkCKw' width='200px' height='160px'/>
                            <h3 style={{fontWeight: 'bold'}}>NAME OF THE MEAL</h3>
                            <span>COOKING TIME</span><br></br>
                            <i className="small material-icons">star_border star_border star_border star_border star_border</i><br></br>
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
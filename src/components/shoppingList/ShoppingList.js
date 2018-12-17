import React from 'react'
import './ShoppingList.css'

export const ShoppingList = (props) => {
  // if (props.shoppingList === null) return <h1>Add recipes to your shopping list</h1>

  return (
    <div className='shopping-list-container'>
      <h1>MY SHOPPING LIST</h1>
      <button className='print-button' onClick={window.print}>PRINT SHOPPING LIST</button> 
      <button className='clear-button'>CLEAR LIST</button>

      <ul className='shopping-list'>
        {props.shoppingList.map(ingredient => {
          return (
            <li key={ingredient.id} className='shopping-list-ingredient'>
              {/* <img alt='ingredient' src='#' width='50px' height='50px' /> */}
              <h3 style={{ fontWeight: 'bold' }}>{ingredient.name}</h3>
              <span>{ingredient.quantity}</span> <span>{ingredient.unit}</span>
              <hr></hr>
            </li>
          )
        })}
      </ul>
    </div>
  )
}


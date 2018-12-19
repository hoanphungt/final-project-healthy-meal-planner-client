import React from 'react'
import './ShoppingList.css'

export const ShoppingList = (props) => {

  return (
    <div className='shopping-list-container'>
      <h1 className='shopping-list-title'>MY SHOPPING LIST</h1>
      <div className='two-buttons'>
        <button className='print-button' onClick={window.print}><div className="print"><i className="material-icons">print</i></div>PRINT SHOPPING LIST</button>
        <button className='clear-button' onClick={props.clearShoppingList}>CLEAR LIST</button>
      </div>
      <ul className='shopping-list'>
        {props.shoppingList.map(ingredient => {
          return (
            <li key={ingredient.id} className='shopping-list-ingredient'>
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


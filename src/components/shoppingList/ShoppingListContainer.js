import React from 'react'
import { connect } from 'react-redux';
import { ShoppingList } from './ShoppingList';
import { clearShoppingList } from '../../actions/shoppingList'

const isEmpty = (obj) => {
  for (var key in obj) {
    if (obj.hasOwnProperty(key))
      return false;
  }
  return true;
}

class ShoppingListContainer extends React.Component {
  clearShoppingListHandler = () => {
    this.props.clearShoppingList()
  }

  render() {
    if (isEmpty(this.props.shoppingList)) {
      return <div className='empty-shoppinglist'>
        <h1>MY SHOPPING LIST</h1>
        <h2>Add recipes to your shopping list</h2>
      </div>
    }

    return <div className='shopping-list-container'>
      <ShoppingList shoppingList={Object.values(this.props.shoppingList)} clearShoppingList={this.clearShoppingListHandler} />
    </div>
  }
}

const mapStateToProps = (state) => ({
  shoppingList: state.shoppingList
})

export default connect(mapStateToProps, { clearShoppingList })(ShoppingListContainer)


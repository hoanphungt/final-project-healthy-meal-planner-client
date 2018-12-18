import React from 'react'
import { connect } from 'react-redux';
import { ShoppingList } from './ShoppingList';

const isEmpty = (obj) => {
  for (var key in obj) {
    if (obj.hasOwnProperty(key))
      return false;
  }
  return true;
}

class ShoppingListContainer extends React.Component {

  render() {
    if (isEmpty(this.props.shoppingList)) {
      return <div>
        <h1>MY SHOPPING LIST</h1>
        <h2>Add recipes to your shopping list</h2>
      </div>
    }

    return <div>
      <ShoppingList shoppingList={Object.values(this.props.shoppingList)} />
    </div>
  }
}

const mapStateToProps = (state) => ({
  shoppingList: state.shoppingList
})

export default connect(mapStateToProps)(ShoppingListContainer)


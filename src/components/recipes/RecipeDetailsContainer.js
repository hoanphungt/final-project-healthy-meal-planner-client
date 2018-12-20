import React, { Component } from 'react';
import RecipeDetails from './RecipeDetails';
import { connect } from 'react-redux';
import { loadRecipe } from '../../actions/recipes'
import { loadUser } from '../../actions/user'
import { addToShoppingList } from '../../actions/shoppingList'

class RecipeDetailsContainer extends Component {
  componentDidMount() {
    this.props.loadRecipe(Number(this.props.match.params.id))
    this.props.loadUser()
  }

  state = {}
  addToShoppingListHandler = () => {
    const household = this.props.user.adultsNumber + this.props.user.childrenNumber / 2
    this.props.addToShoppingList(this.props.recipe, household)
  }

  render() {
    return (
      <div className='recipe-details'>
        <div className='go-back-button' onClick={() => {this.props.history.goBack()}}> <span className="go-back"><div className="material-icons">chevron_left</div>Go Back</span></div>
        <RecipeDetails recipe={this.props.recipe} user={this.props.user} addToShoppingList={this.addToShoppingListHandler} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  recipe: state.recipe,
  user: state.user
})


export default connect(mapStateToProps, { loadRecipe, loadUser, addToShoppingList })(RecipeDetailsContainer)


import React from 'react'
import { connect } from 'react-redux';
import { PlannerList } from './PlannerList';
import { loadPlanner } from '../../actions/planner'
import { loadUser } from '../../actions/user'
import './Planner.css'
import { addToShoppingList } from '../../actions/shoppingList'

class PlannerListContainer extends React.Component {
  componentDidMount() {
    this.props.loadPlanner()
    this.props.loadUser()
  }

  addAllToShoppingListHandler = () => {
    const household = this.props.user.adultsNumber + this.props.user.childrenNumber / 2
    const allRecipesArr = this.props.planner.planner.map(plannerItem => plannerItem.recipe)

    allRecipesArr.map(recipe => this.props.addToShoppingList(recipe, household))
  }

  addToShoppingListHandler = (recipe) => {
    const household = this.props.user.adultsNumber + this.props.user.childrenNumber / 2
    this.props.addToShoppingList(recipe, household)
  }


  render() {
    return (<div className='planner-list'>
      <PlannerList planner={this.props.planner} addAllToShoppingList={this.addAllToShoppingListHandler} addToShoppingList={this.addToShoppingListHandler} />
    </div>)
  }
}

const mapStateToProps = (state) => ({
  planner: state.planner,
  user: state.user
})

export default connect(mapStateToProps, { loadPlanner, loadUser, addToShoppingList })(PlannerListContainer) 
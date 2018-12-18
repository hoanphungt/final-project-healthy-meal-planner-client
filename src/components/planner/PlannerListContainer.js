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
        console.log(household, "yelp")
        //make an array with all the recipes 
        //call the addtoshoppinglist func for each recipe
        const allRecipesArr = this.props.planner.planner.map(plannerItem => plannerItem.recipe)
        console.log(allRecipesArr, "yolo")
        
        allRecipesArr.map(recipe => this.props.addToShoppingList(recipe, household))
        // this.props.addToShoppingList(this.props.recipe, household)
      }

    render() {
        return (<div className='planner-list'>
            <PlannerList planner={this.props.planner} addAllToShoppingList={this.addAllToShoppingListHandler}/>
        </div>)
    }
}

const mapStateToProps = (state) => ({
    planner: state.planner,
    user: state.user
})

export default connect(mapStateToProps, {loadPlanner, loadUser, addToShoppingList })(PlannerListContainer) 
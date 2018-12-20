import React from 'react'
import { connect } from 'react-redux';
import { RecipeListDays } from './RecipeListDays';
import { loadRecipes } from '../../actions/recipes'

class RecipeListContainerDays extends React.Component {
    componentDidMount() {
        this.props.loadRecipes()
    }
    render() {

        return <div>
            <RecipeListDays recipes={this.props.recipes} dayId={this.props.match.params.id}/>
        </div>
    }
}

const mapStateToProps = (state) => ({
    recipes: state.recipes
})

export default connect(mapStateToProps, {loadRecipes})(RecipeListContainerDays) 
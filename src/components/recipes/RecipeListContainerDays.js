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
            {console.log(this.props)}
            <RecipeListDays recipes={this.props.recipes}/>
        </div>
    }
}

const mapStateToProps = (state) => ({
    recipes: state.recipes
})

export default connect(mapStateToProps, {loadRecipes})(RecipeListContainerDays) 
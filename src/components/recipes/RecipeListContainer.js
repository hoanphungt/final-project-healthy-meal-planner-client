import React from 'react'
import { connect } from 'react-redux';
import { RecipeList } from './RecipeList';

class RecipeListContainer extends React.Component {
    render() {
        return <RecipeList recipes={this.props.recipes} />
    }
}

const mapStateToProps = (state) => ({
    recipes: state.recipes
})

export default connect(mapStateToProps)(RecipeListContainer) 
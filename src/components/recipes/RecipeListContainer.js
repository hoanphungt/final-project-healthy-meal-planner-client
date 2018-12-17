import React from 'react'
import { connect } from 'react-redux';
import { RecipeList } from './RecipeList';
import { loadRecipes } from '../../actions/recipes'

class RecipeListContainer extends React.Component {
    componentDidMount() {
        this.props.loadRecipes()
    }

    render() {
        return <div>
            <RecipeList recipes={this.props.recipes}/>
            <button onClick={() => this.props.history.push('/logout')}>Logout</button>
        </div>
    }
}

const mapStateToProps = (state) => ({
    recipes: state.recipes
})

export default connect(mapStateToProps, {loadRecipes})(RecipeListContainer) 
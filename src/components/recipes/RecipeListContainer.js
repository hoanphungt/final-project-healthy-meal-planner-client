import React from 'react'
import { connect } from 'react-redux';
import { RecipeList } from './RecipeList';

class RecipeListContainer extends React.Component {
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

export default connect(mapStateToProps)(RecipeListContainer) 
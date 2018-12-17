import React, { Component } from 'react';
import RecipeDetails from './RecipeDetails';
import { connect } from 'react-redux';
import { loadRecipe } from '../../actions/recipes'
import { Link } from 'react-router-dom'

class RecipeDetailsContainer extends Component {
  componentDidMount() {
    this.props.loadRecipe(Number(this.props.match.params.id))
  }
  state = {  }
  render() { 
    return ( 
      <div>
        <Link to='/recipes'>Go Back</Link>
        <RecipeDetails recipe={this.props.recipe} /> 
      </div>
     );
  }
}

const mapStateToProps = (state) => ({
  recipe: state.recipe
})
 
export default connect (mapStateToProps,{ loadRecipe } )(RecipeDetailsContainer)
import React, { Component } from 'react';
import RecipeDetails from './RecipeDetails';
import { connect } from 'react-redux';

class RecipeDetailsContainer extends Component {
  state = {  }
  render() { 
    return ( 
      <RecipeDetails recipe={this.props.recipe} />
     );
  }
}

const mapStateToProps = (state) => ({
  recipe: state.recipe
})
 
export default connect (mapStateToProps)(RecipeDetailsContainer)
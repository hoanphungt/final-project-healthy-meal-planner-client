import React, { Component } from 'react';
import RecipeDetails from './RecipeDetails';
import { connect } from 'react-redux';
// import Navbar from '../navbar/Navbar';
// import { Newbar } from '../navbar/Newbar';

class RecipeDetailsContainer extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
          {/* <Newbar />    */}
        <RecipeDetails recipe={this.props.recipe} />

      </div>
     );
  }
}

const mapStateToProps = (state) => ({
  recipe: state.recipe
})
 
export default connect (mapStateToProps)(RecipeDetailsContainer)
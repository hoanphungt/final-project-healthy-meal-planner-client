import React, { Component } from 'react';
import RecipeDetails from './RecipeDetails';
import { connect } from 'react-redux';
import { loadRecipe } from '../../actions/recipe'
import { loadUser } from '../../actions/user'

// import Navbar from '../navbar/Navbar';
// import { Newbar } from '../navbar/Newbar';

class RecipeDetailsContainer extends Component {
  componentDidMount() {
    this.props.loadRecipe(Number(this.props.match.params.id))
    this.props.loadUser()
  }
  state = {  }
  render() { 
    return ( 
      <div>
          {/* <Newbar />    */}
        <RecipeDetails recipe={this.props.recipe} user={this.props.user}/> 

        <Link to='/recipes'>Go Back</Link>
        <RecipeDetails recipe={this.props.recipe} /> 
      </div>
     );
  }
}

const mapStateToProps = (state) => ({
  recipe: state.recipe,
  user: state.user
})

 
export default connect (mapStateToProps,{ loadRecipe, loadUser} )(RecipeDetailsContainer)
import React from 'react'
import { AddRepForm } from './AddRepForm'
import { connect } from 'react-redux'
import { createRecipe } from '../../actions/recipe'

class AddRepFormContainer extends React.Component {
    state= {
            //recipe entity
            name :'',
            image :'',
            cookingTime :'',
            instructions :'',
            diffLevel : '',
            season :'',
            dietary: '',
            // ingredients ID
             ingredient : [],
            //ingredient,
      
            // units ID 
             unit:[],
            //unit,
      
            // recipesIngredient
            recipeIngredients : []
            //quantity,
          } 
  onSubmit = (event) => {
    event.preventDefault()
    this.props.createRecipe(this.state)
    console.log(this.state)
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  render() {

    return (<div className='login'>
      <AddRepForm onSubmit={this.onSubmit} onChange={this.onChange} values={this.state} />
      <p style={{color:"red"}}>{this.props.error}</p>
    </div>)
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
  error: state.login.error
})

export default connect(mapStateToProps, { createRecipe })(AddRepFormContainer)
    //state= {
      //       // recipe entity
      //       name :'test',
      //       // image :'',
      //       // cookingTime :0 ,
      //       // instructions :'',
      //       // diffLevel : '',
      //       // season :'',
      //       // dietary: '',
      //       // // ingredients ID
      //       //  ingredient : [],
      //       // //ingredient,
      
      //       // // units ID 
      //       //  unit:[],
      //       // //unit,
      
      //       // // recipesIngredient
      //       // recipeIngredients : []
      //       // //quantity,
      //     } 
    
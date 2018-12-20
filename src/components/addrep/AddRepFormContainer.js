import React from 'react'
import { AddRepForm } from './AddRepForm'
import { connect } from 'react-redux'
import { createRecipe } from '../../actions/recipe'

class AddRepFormContainer extends React.Component {
    state= {
            //recipe entity
            name :'',
            image :'',
            cookingTime :0,
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
  onSubmit = () => {
    // event.preventDefault()
    this.props.createRecipe(this.state)
    console.log(this.state)
  }

  onChange2 = (event,i) => {
    let a = this.state[event.target.name].slice(); //creates the clone of the state
    a[i] = event.target.value;
    this.setState({[event.target.name]: a});
    console.log(this.state[event.target.name])
  }


  onChange = (event) => {
   this.setState({
      [event.target.name] : event.target.value
   })
  }

  onChangeNumber = (event) => {
    this.setState({
       [event.target.name] : parseInt(event.target.value)
    })
   }

  render() {

    return (<div className='login'>
      <AddRepForm onSubmit={this.onSubmit} onChange={this.onChange} 
      onChange2={this.onChange2} values={this.state}
      onChangeNumber={this.onChangeNumber}
      />
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
    

import React from 'react'
import { Link } from 'react-router-dom'

export const AddRepForm = (props) => {
    const { onSubmit, onChange, values } = props

    return (
        <div>
            <h1>New Recipe</h1>
            <form onSubmit={onSubmit}>
                <input type="box" placeholder="name" name='name' onChange={onChange} value={values.name}/>
                <input type="box" placeholder="season" name='season' onChange={onChange} value={values.season}/>

                <input type="box" placeholder="cookingTime" name='cookingTime' onChange={onChange} value={values.cookingTime}/>
                <input type="box" placeholder="ingredient" name='ingredient[0]' onChange={onChange} value={values.ingredient[0]}/>
                <input type="box" placeholder="unit" name='unit[0]' onChange={onChange} value={values.unit[0]}/>
                <input type="box" placeholder="recipeIngredients" name='recipeIngredients[0]' onChange={onChange} value={values.recipeIngredients[0]}/>

                <input type="box" placeholder="ingredient" name='ingredient[1]' onChange={onChange} value={values.ingredient[1]}/>
                <input type="box" placeholder="unit" name='unit[1]' onChange={onChange} value={values.unit[1]}/>
                <input type="box" placeholder="recipeIngredients" name='recipeIngredients[1]' onChange={onChange} value={values.recipeIngredients[1]}/>
                <button type='submit'>SUBMIT</button>
              
            </form>
        </div>
    )
}


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
    
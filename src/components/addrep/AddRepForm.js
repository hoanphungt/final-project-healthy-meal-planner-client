import React from 'react'
// import { Link } from 'react-router-dom'

//  function list (onChange2, values,i){
//     return (
//         <>
//          <input type="box" placeholder="ingredient" name='ingredient' onChange={onChange2} value={values.ingredient[i]} />
//          <input type="box" placeholder="unit" name='unit' onChange={onChange2} value={values.unit[i]} />
//          <input type="box" placeholder="recipeIngredients" name='recipeIngredients' onChange={onChange2} value={values.recipeIngredients[i]} />
//      </>
//     )}

// function loop (onChange2, values) {
//     for (let i = 0; i < 5; i++) {
//         return list(onChange2, values,i)
        
// }}

export const AddRepForm = (props) => {
    const { onSubmit, onChange, values, onChange2 } = props

    return (
        <div>
            <h1>New Recipe</h1>
            <form onSubmit={onSubmit}>
                <input type="box" placeholder="name" name='name' onChange={onChange} value={values.name} />
                    <input type="box" placeholder="season" name='season' onChange={onChange} value={values.season} />
                    {/* {loop(onChange2, values)}
                    {list(onChange2, values,0)} */}

                <input type="box" placeholder="cookingTime" name='cookingTime' onChange={onChange} value={values.cookingTime} />
                <input type="box" placeholder="ingredient" name='ingredient' onChange={onChange2} value={values.ingredient[0]} />
                <input type="box" placeholder="unit" name='unit' onChange={onChange2} value={values.unit[0]} />
                <input type="box" placeholder="recipeIngredients" name='recipeIngredients' onChange={onChange2} value={values.recipeIngredients[0]} />
                  <input type="box" placeholder="ingredient" name='ingredient' onChange={onChange2} value={values.ingredient[1]} />
                <input type="box" placeholder="unit" name='unit' onChange={onChange2} value={values.unit[1]} />
                <input type="box" placeholder="recipeIngredients" name='recipeIngredients' onChange={onChange2} value={values.recipeIngredients[1]} />
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

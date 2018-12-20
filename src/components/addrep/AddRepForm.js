import React from 'react'
import '../signup/SignupForm.css'

export const AddRepForm = (props) => {
    const { onSubmit, onChange, values, onChange2, onChangeNumber } = props

    return (
        <div>
            <h1>New Recipe</h1>
            <form onSubmit={onSubmit}>
                <input type="box" placeholder="name" name='name' onChange={onChange} value={values.name} />
                <input type="box" placeholder="season" name='season' onChange={onChange} value={values.season} />


                <input type="box" placeholder="image" name='image' onChange={onChange} value={values.image} />
                <input type="box" placeholder="instructions" name='instructions' onChange={onChange} value={values.instructions} />
                <input type="box" placeholder="diffLevel" name='diffLevel' onChange={onChange} value={values.diffLevel} />
                <input type="box" placeholder="dietary" name='dietary' onChange={onChange} value={values.dietary} />

               
                <input type="box" placeholder="cookingTime" name='cookingTime' onChange={onChangeNumber} value={values.cookingTime} />
                {/* There is one div for each ingredient, just for MVP, need to change later */}

                <div>
                    <input type="box" placeholder="ingredient" name='ingredient' onChange={(event) => onChange2(event, 0)} value={values.ingredient[0]} />
                    <input type="box" placeholder="unit" name='unit' onChange={(event) => onChange2(event, 0)} value={values.unit[0]} />
                    <input type="box" placeholder="recipeIngredients" name='recipeIngredients' onChange={(event) => onChange2(event, 0)} value={values.recipeIngredients[0]} />
                </div>

                <div>
                    <input type="box" placeholder="ingredient" name='ingredient' onChange={(event) => onChange2(event, 1)} value={values.ingredient[1]} />
                    <input type="box" placeholder="unit" name='unit' onChange={(event) => onChange2(event, 1)} value={values.unit[1]} />
                    <input type="box" placeholder="recipeIngredients" name='recipeIngredients' onChange={(event) => onChange2(event, 1)} value={values.recipeIngredients[1]} />
                </div>

                <div>
                    <input type="box" placeholder="ingredient" name='ingredient' onChange={(event) => onChange2(event, 3)} value={values.ingredient[3]} />
                    <input type="box" placeholder="unit" name='unit' onChange={(event) => onChange2(event, 3)} value={values.unit[3]} />
                    <input type="box" placeholder="recipeIngredients" name='recipeIngredients' onChange={(event) => onChange2(event, 3)} value={values.recipeIngredients[3]} />
                </div>

                <div>
                    <input type="box" placeholder="ingredient" name='ingredient' onChange={(event) => onChange2(event, 4)} value={values.ingredient[4]} />
                    <input type="box" placeholder="unit" name='unit' onChange={(event) => onChange2(event, 4)} value={values.unit[4]} />
                    <input type="box" placeholder="recipeIngredients" name='recipeIngredients' onChange={(event) => onChange2(event, 4)} value={values.recipeIngredients[4]} />
                </div>

                <div>
                    <input type="box" placeholder="ingredient" name='ingredient' onChange={(event) => onChange2(event, 5)} value={values.ingredient[5]} />
                    <input type="box" placeholder="unit" name='unit' onChange={(event) => onChange2(event, 5)} value={values.unit[5]} />
                    <input type="box" placeholder="recipeIngredients" name='recipeIngredients' onChange={(event) => onChange2(event, 5)} value={values.recipeIngredients[5]} />
                </div>

                <div>
                    <input type="box" placeholder="ingredient" name='ingredient' onChange={(event) => onChange2(event, 6)} value={values.ingredient[6]} />
                    <input type="box" placeholder="unit" name='unit' onChange={(event) => onChange2(event, 6)} value={values.unit[6]} />
                    <input type="box" placeholder="recipeIngredients" name='recipeIngredients' onChange={(event) => onChange2(event, 6)} value={values.recipeIngredients[6]} />
                </div>

                <div>
                    <input type="box" placeholder="ingredient" name='ingredient' onChange={(event) => onChange2(event, 7)} value={values.ingredient[7]} />
                    <input type="box" placeholder="unit" name='unit' onChange={(event) => onChange2(event, 7)} value={values.unit[7]} />
                    <input type="box" placeholder="recipeIngredients" name='recipeIngredients' onChange={(event) => onChange2(event, 7)} value={values.recipeIngredients[7]} />
                </div>


                <div>
                    <input type="box" placeholder="ingredient" name='ingredient' onChange={(event) => onChange2(event, 8)} value={values.ingredient[8]} />
                    <input type="box" placeholder="unit" name='unit' onChange={(event) => onChange2(event, 8)} value={values.unit[8]} />
                    <input type="box" placeholder="recipeIngredients" name='recipeIngredients' onChange={(event) => onChange2(event, 8)} value={values.recipeIngredients[8]} />
                </div>

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

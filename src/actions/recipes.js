import request from 'superagent'
import {baseUrl} from '../constant'

export const RECIPES_LOADED = 'RECIPES_LOADED'
export const RECIPE_LOADED = 'RECIPE_LOADED'

const recipesLoaded = (recipes) => ({
    type: RECIPES_LOADED,
    payload: recipes
})

const recipeLoaded = (recipe) => ({
    type: RECIPE_LOADED,
    recipe
})

export const loadRecipes = () => (dispatch) => {
  
    request
        .get(`${baseUrl}/recipes`)
        .then(response => {
            dispatch(recipesLoaded(response.body))
        })
        .catch(console.error)
}

export const loadRecipe = (id) => (dispatch) => {
  
  request
      .get(`${baseUrl}/recipes/${id}`)
      .then(response => {
          dispatch(recipeLoaded(response.body))
      })
      .catch(console.error)
}
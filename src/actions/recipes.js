import request from 'superagent'
import {baseUrl} from '../constant'

export const RECIPE_LOADED = 'RECIPE_LOADED'

const recipeLoaded = (recipe) => ({
    type: RECIPE_LOADED,
    recipe
})

// export const loadRecipe = (id) => (dispatch, getState) => {
//     if (getState().planner) return

//     if (!getState().currentUser) return alert('You need to login to see your recipes')
//     const jwt = getState().currentUser.jwt

//     request
//         .get(`${baseUrl}/recipes/${id}`)
//         .set('Authorization', `Bearer ${jwt}`)
//         .then(response => {
//             dispatch(recipeLoaded(response.body))
//         })
//         .catch(console.error)
// }

export const loadRecipe = (id) => (dispatch) => {
  
  request
      .get(`${baseUrl}/recipes/${id}`)
      .then(response => {
          dispatch(recipeLoaded(response.body))
      })
      .catch(console.error)
}
import request from 'superagent'
import {baseUrl} from '../constant'

const recipeCreated = (recipe) => ({
    type: 'NEW_RECIPE',
    payload: recipe
})

export const createRecipe = (data) => (dispatch) => {
    //if (getState().planner) return

    //if (!getState().currentUser) return alert('You need to login to see your planner')
    //const offset = getState().offset
    request
        .post(`${baseUrl}/recipes`)
        .send(data)
        .then(response => {
         dispatch(recipeCreated(response.body))
            console.log(response)
        })
        .catch(console.error)
}


export const changeRecipe = (recipeId, dayId,jwt ) => () => {
    console.log('recipeId', recipeId,typeof(recipeId))
    console.log('dayId', dayId,typeof(dayId))
    console.log('jwt',jwt)
    // if (!getState().currentUser) return alert('You need to login to see your planner')
    // const jwt = getState().currentUser.jwt
    jwt=jwt.jwt
    request
        .patch(`${baseUrl}/days/${dayId}/recipes/${recipeId}`)
        .set('Authorization', `Bearer ${jwt}`)
        .then(response => {
            console.log(response)
        })
        .catch(console.error)
}
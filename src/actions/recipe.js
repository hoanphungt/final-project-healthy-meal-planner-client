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
            // dispatch(recipeCreated(response.body))
            console.log(response)
        })
        .catch(console.error)
}

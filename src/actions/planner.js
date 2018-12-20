import request from 'superagent'
import {baseUrl} from '../constant'

export const PLANNER_LOADED = 'PLANNER_LOADED'
// export const OFFSET_LOADED = 'OFFSET_LOADED'
const plannerLoaded = (planner) => ({
    type: PLANNER_LOADED,
    payload: planner
})



export const loadPlanner = (offset) => (dispatch, getState) => {

    if (!getState().currentUser) return alert('You need to login to see your planner')
    const jwt = getState().currentUser.jwt

    request
        .get(`${baseUrl}/myplanner?offset=${offset}`)
        .set('Authorization', `Bearer ${jwt}`)
        .then(response => {
            dispatch(plannerLoaded(response.body))
        })
        .catch(console.error)
}


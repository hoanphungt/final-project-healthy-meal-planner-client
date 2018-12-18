import request from 'superagent'
import {baseUrl} from '../constant'

export const PLANNER_LOADED = 'PLANNER_LOADED'
// export const OFFSET_LOADED = 'OFFSET_LOADED'
const plannerLoaded = (planner) => ({
    type: PLANNER_LOADED,
    payload: planner
})

<<<<<<< HEAD
=======


>>>>>>> d6af45d920e05f5bb90e70e7167ea5485a882ce0
export const loadPlanner = (offset) => (dispatch, getState) => {
   // if (getState().planner) return

    if (!getState().currentUser) return alert('You need to login to see your planner')
    const jwt = getState().currentUser.jwt
    //const offset = getState().offset
    console.log('HERE',offset,'OFFSET')
    request
        .get(`${baseUrl}/myplanner?offset=${offset}`)
        .set('Authorization', `Bearer ${jwt}`)
        .then(response => {
            dispatch(plannerLoaded(response.body))
        })
        .catch(console.error)
}


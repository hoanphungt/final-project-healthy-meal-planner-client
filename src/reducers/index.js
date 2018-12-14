import { combineReducers } from 'redux'
import planner from './planner'
import recipes from './recipes'
import currentUser from './currentUser'
import login from './login'

export default combineReducers({
    planner,
    recipes,
    currentUser,
    login
})


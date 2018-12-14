import { combineReducers } from 'redux'
import planner from './planner'
import recipes from './recipes'
import currentUser from './currentUser'
import login from './login'
import recipe from './recipe'

export default combineReducers({
    planner,
    recipes,
    recipe,
    currentUser,
    login
})


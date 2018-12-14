import { combineReducers } from 'redux'
import planner from './planner'
import recipes from './recipes'
import currentUser from './currentUser'
import login from './login'
import recipe from './recipe'
import signup from './signup'

export default combineReducers({
    planner,
    recipes,
    recipe,
    currentUser,
    login,
    signup
})


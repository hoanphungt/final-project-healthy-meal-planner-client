import { combineReducers } from 'redux'
import planner from './planner'
import recipes from './recipes'
import recipe from './recipe'

export default combineReducers({
    planner,
    recipes,
    recipe
})


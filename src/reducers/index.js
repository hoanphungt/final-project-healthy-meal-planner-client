import { combineReducers } from 'redux'
import planner from './planner'
import recipes from './recipes'

export default combineReducers({
    planner,
    recipes
})


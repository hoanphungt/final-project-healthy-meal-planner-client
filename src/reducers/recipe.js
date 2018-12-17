

import {RECIPE_LOADED} from '../actions/recipes'

export default (state = null, action = {}) => {
    switch (action.type){
        case RECIPE_LOADED:
        return action.recipe
        default:
        return state
    }
}
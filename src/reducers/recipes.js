import { RECIPES_LOADED } from "../actions/recipes";


export default (state = null, action = {}) => {
    switch (action.type) {
        case RECIPES_LOADED:
            return action.payload
        default:
            return state
    }
}
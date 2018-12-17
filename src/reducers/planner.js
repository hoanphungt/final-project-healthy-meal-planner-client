import { PLANNER_LOADED } from "../actions/planner";

export default (state = null, action = {}) => {
    switch (action.type) {
        case PLANNER_LOADED:
            return action.payload
        default:
            return state
    }
}
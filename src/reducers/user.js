import {USER_LOADED} from '../actions/user'

export default (state = null, action = {}) => {
    switch (action.type){
        case USER_LOADED:
        return action.user
        default:
        return state
    }
}
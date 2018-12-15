import { LOGIN, LOGOUT } from "../actions/auth";
import { localStorageJwtKey } from '../constant'

let initialState = null
try {
    const jwt = localStorage.getItem(localStorageJwtKey)
    if (jwt) {
        initialState = { jwt }
    }
}
catch (error) {
    console.log(`Error retrieving data from local storage`, error)
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case LOGIN:
            localStorage.getItem(localStorageJwtKey, action.payload.jwt)
            return action.payload
        case LOGOUT:
            localStorage.removeItem(localStorageJwtKey)
            return null    
        default: 
            return state
    }
}
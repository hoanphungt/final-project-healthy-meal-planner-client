import request from 'superagent'
import { baseUrl } from '../constant'
import { isExpired } from '../jwt'

export const LOGIN = 'LOGIN'
export const LOGIN_FAILED = 'LOGIN_FAILED'
export const LOGOUT = 'LOGOUT'

export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS'
export const USER_SIGNUP_FAILED = 'USER_SIGNUP_FAILED'

export const UPDATE_USERS = 'UPDATE_USERS'

const userLogined = (login) => ({
    type: LOGIN,
    payload: login
})

const loginFailed = (error) => ({
    type: LOGIN_FAILED,
    payload: error || 'Unknown error'
})

const updateUsers = (users) => ({
    type: UPDATE_USERS,
    payload: users
})

const userSignupFailed = (error) => ({
    type: USER_SIGNUP_FAILED,
    payload: error || 'Unknown error'
})

const userSignupSuccess = () => ({
    type: USER_SIGNUP_SUCCESS
})

export const logout = () => ({
    type: LOGOUT
})

export const login = (email, password) => (dispatch) => {
    request
        .post(`${baseUrl}/login`)
        .send({ email, password })
        .then(result => {
            dispatch(userLogined(result.body))
        })
        .catch(err => {
            if (err.status === 400) {
                dispatch(loginFailed(err.response.body.message))
            }
            else {
                console.error(err)
            }
        })
}

export const getUsers = () => (dispatch, getState) => {
    const state = getState()
    if (!state.currentUser) return null
    const jwt = state.currentUser.jwt

    if (isExpired(jwt)) return dispatch(logout())

    request
        .get(`${baseUrl}/users`)
        .set('Authorization', `Bearer ${jwt}`)
        .then(result => dispatch(updateUsers(result.body)))
        .catch(err => console.error(err))
}

export const signup = (data) => (dispatch) =>
    request
        .post(`${baseUrl}/users`)
        .send(data)
        .then(result => {
            dispatch(userSignupSuccess())
        })
        .catch(err => {
            if (err.status === 400) {
                dispatch(userSignupFailed(err.response.body.message))
            }
            else {
                console.error(err)
            }
        })
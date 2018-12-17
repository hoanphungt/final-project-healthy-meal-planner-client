import request from 'superagent'
import {baseUrl} from '../constant'
import { isExpired } from '../jwt'
import { logout } from './auth'

export const USER_LOADED = 'USER_LOADED'

const userLoaded = (user) => ({
    type: USER_LOADED,
    user
})


export const loadUser = () => (dispatch, getState) => {
    const state = getState()
    if (!state.currentUser) return null
    const jwt = state.currentUser.jwt

    if (isExpired(jwt)) return dispatch(logout())
  request
      .get(`${baseUrl}/user`)
      .set('Authorization', `Bearer ${jwt}`)
      .then(response => {
          dispatch(userLoaded(response.body))
      })
      .catch(console.error)
}
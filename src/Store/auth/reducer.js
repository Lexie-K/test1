import { createAction, handleActions } from 'redux-actions'
import { REPLACE_ERROR, REPLACE_ERROR_MESSAGE, REPLACE_IS_AUTH } from './constants'
import { reducerMethods } from '../utils'

export const defaultState = { 
  username: "Alexa",
  password: "12345",
  isAuth: false,
  error: false,
  errorMessage: null,
}

export const login = (localUsername, localPassword) => (dispatch, getState) => {
  const { auth } = getState()

  if (auth.username === localUsername && auth.password === localPassword) {
    dispatch(replaceIsAuth(true))
  } else {
    dispatch(replaceError(true))
    dispatch(replaceErrorMessage('User is invalid'))
  }
}

export const exit = () => (dispatch) => {
  dispatch({ type: 'EXIT' })
}

export const replaceIsAuth = createAction(REPLACE_IS_AUTH)
export const replaceError = createAction(REPLACE_ERROR)
export const replaceErrorMessage = createAction(REPLACE_ERROR_MESSAGE)

export const reducer = handleActions({
  [replaceIsAuth]: reducerMethods.replace('isAuth'),
  [replaceError]: reducerMethods.replace('error'),
  [replaceErrorMessage]: reducerMethods.replace('errorMessage')
}, defaultState)
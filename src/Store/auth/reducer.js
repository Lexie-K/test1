import { createAction, handleActions } from 'redux-actions'
import { REPLACE_ERROR, REPLACE_ERROR_MESSAGE, REPLACE_IS_AUTH, REPLACE_USERNAME, REPLACE_PASSWORD, REPLACE_ERROR_EXIST_MESSAGE, REPLACE_ERROR_EXIST }  from './constants'
import { reducerMethods } from '../utils'

export const defaultState = { 
  username: "Alexa",
  password: "12345",
  isAuth: false,
  error: false,
  errorExist: false,
  errorMessage: null,
  errorExistMessage: null,  
}

export const login = (localUsername, localPassword) => (dispatch, getState) => {
  const { auth } = getState()
  
  if (auth.username === localUsername && auth.password === localPassword) { 
    dispatch(replaceIsAuth(true))
    dispatch(replaceError(false))
  } else {
    dispatch(replaceError(true))
    dispatch(replaceErrorMessage('User is invalid'))
  }  
}

export const updateLogin = (newUsername, newPassword) => (dispatch,  getState) => {
  const { auth } = getState()
  if ( auth.username  !== newUsername && newUsername?.length >= 4  && auth.password !== newPassword && newPassword?.length >= 5) {
    dispatch(replaceUsername(newUsername))
    dispatch(replacePassword(newPassword))  
    dispatch(replaceIsAuth(false))
    dispatch(replaceErrorExist(false))
  } else if (auth.username  === newUsername && auth.password === newPassword) {
    dispatch(replaceErrorExist(true))
    dispatch(replaceErrorExistMessage('User already exists'))
    dispatch(replaceIsAuth(true))
  }  
}

export const replaceIsAuth = createAction(REPLACE_IS_AUTH)
export const replaceError = createAction(REPLACE_ERROR)
export const replaceErrorExist = createAction(REPLACE_ERROR_EXIST)
export const replaceErrorMessage = createAction(REPLACE_ERROR_MESSAGE)
export const replaceErrorExistMessage = createAction(REPLACE_ERROR_EXIST_MESSAGE)
export const replaceUsername = createAction(REPLACE_USERNAME)
export const replacePassword = createAction(REPLACE_PASSWORD)


export const reducer = handleActions({
  [replaceIsAuth]: reducerMethods.replace('isAuth'),
  [replaceError]: reducerMethods.replace('error'),
  [replaceErrorMessage]: reducerMethods.replace('errorMessage'),
  [replaceErrorExistMessage]: reducerMethods.replace('errorExistMessage'),
  [replaceUsername]: reducerMethods.replace('username'),
  [replacePassword]: reducerMethods.replace('password'),
  [replaceErrorExist]: reducerMethods.replace('errorExist'),
}, 
defaultState)
import { createStore, applyMiddleware } from "redux"
import * as Auth from './auth'
import { combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

const defaultState = {
  auth: Auth.defaultState
}

const appReducer = combineReducers({
  auth: Auth.reducer,
})

const rootReducer = (state, action) => {
  if (action.type === 'EXIT') {
    state = defaultState
    window.location = '/'
  }
  
	return appReducer(state, action)
}

export const makeStore = (initialState = defaultState) => {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware)),
  )
  return { store }
}
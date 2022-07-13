import { createStore, applyMiddleware } from "redux"
import * as Auth from './auth'
import { combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import { persistStore, persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage"

const defaultState = {
  auth: Auth.defaultState
}

const appReducer = combineReducers({
  auth: Auth.reducer,
})

// const rootReducer = (state, action) => {
//   if (action.type === 'EXIT') {
//     state = defaultState
//     window.location = '/'
//   }
  
// 	return appReducer(state, action)
// }

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer (persistConfig, appReducer, defaultState)

export const makeStore = (initialState = defaultState) => {
  const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware)),
  )
  const persistor = persistStore(store)
  return { store, persistor }
}
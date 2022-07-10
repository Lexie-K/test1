import userReducer from './Reducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  loginInfo: userReducer,
})

export default rootReducer;
import { combineReducers } from 'redux'

import projectReducer from './project'
import userReducer from './user'

const reducer = combineReducers({
  projectReducer,
  userReducer
})

export default reducer

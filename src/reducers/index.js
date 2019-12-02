import { combineReducers } from 'redux'
import characters from './characters'
import user from './user'

const rootReducer = combineReducers({
  characters,
  user
})

export default rootReducer

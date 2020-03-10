import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

import headernavbar from './headernavbarReducer'
import user from './userReducer'

const rootReducer = combineReducers({
  form,
  headernavbar,
  user,
})

export default rootReducer

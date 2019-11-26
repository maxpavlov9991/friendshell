import { combineReducers } from 'redux';

import { authorizationReducer } from './authorization/reducers'
import { registrationReducer } from './registration/reducers'
import { userReducer } from './user/reducers'

const rootReducer = combineReducers({
  auth: authorizationReducer,
  reg: registrationReducer,
  user: userReducer
})

export default rootReducer
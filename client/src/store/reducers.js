import { combineReducers } from 'redux';

import { authorizationReducer } from './authorization/reducers'
import { registrationReducer } from './registration/reducers'
import { mainReducer } from './main/reducers'

const rootReducer = combineReducers({
  auth: authorizationReducer,
  reg: registrationReducer,
  main: mainReducer
})

export default rootReducer
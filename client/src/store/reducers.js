import { combineReducers } from 'redux';

import { authorizationReducer } from './authorization/reducers'
import { registrationReducer } from './registration/reducers'
import { mainReducer } from './main/reducers'

const rootReducer = combineReducers({
  authorization: authorizationReducer,
  registration: registrationReducer,
  main: mainReducer
})

export default rootReducer
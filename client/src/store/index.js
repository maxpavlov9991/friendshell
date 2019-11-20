import { createStore } from 'redux';

import rootReducer from './reducers'

import { authorizationReducer } from './authorization/reducers'
import { registrationReducer } from './registration/reducers'
import { mainReducer } from './main/reducers'

const store = createStore(rootReducer)

export default store;
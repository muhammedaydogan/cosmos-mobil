import { combineReducers } from 'redux'

import auth from './auth' 
import screens from './screens' 

export default combineReducers({
    auth,
    screens
})
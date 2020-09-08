import {combineReducers} from 'redux'
import userReducer from './userReducer'
import pcaReducers from './pcasReducer'
export default combineReducers({
        userReducers: userReducer, 
        pcaReducer: pcaReducers
    })


import {combineReducers} from 'redux'
import userReducer from './userReducer'
import pcaReducers from './pcasReducer'
import cropsReducer from './cropsReducer'
export default combineReducers({
        userReducers: userReducer, 
        pcaReducer: pcaReducers, 
        cropsReducer: cropsReducer
    })


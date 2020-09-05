import {combineReducers} from 'redux'
import pcaReducer from './pcaReducer'
export const rootreducers = () => {
    combineReducers({
        pcaReducer: pcaReducer
    })
}

export default rootreducers
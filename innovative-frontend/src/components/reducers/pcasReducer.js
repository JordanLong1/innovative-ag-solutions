export default ( state = [], action) => {
    switch(action.type) {
        case 'GET_PCAS':
        // console.log('action', action)
        return [...state, action.pcas]
        case 'GET_PCAS_GROWERS_CROPS': 
        console.log('action in reducer', action)
        // return [...state, action.payload]
        return action.payload
        default:
            return state
    }
}
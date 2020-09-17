export default ( state = [], action) => {
    switch(action.type) {
        case 'GET_PCAS':
        return [...state, action.pcas]
        case 'GET_PCAS_GROWERS_CROPS': 
        return action.payload
        default:
            return state
    }
}
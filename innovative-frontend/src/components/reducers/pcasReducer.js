export default ( state = [], action) => {
    switch(action.type) {
        case 'GET_PCAS':
        // console.log('action', action)
        return [...state, action.pcas]
        default:
            return state
    }
}
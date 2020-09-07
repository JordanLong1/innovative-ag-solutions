export default ( state = {}, action) => {

    switch(action.type) {
        case 'LOGIN_USER':
            return action.user
            case 'CURRENT_USER': 
            return action.payload.user
        default:
        return state
    }

}
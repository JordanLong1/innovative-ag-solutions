export default ( state = {}, action) => {

    switch(action.type) {
        case 'LOGIN_USER':
            return action.user
            case 'CURRENT_USER': 
            return action.payload.user
            case 'LOGOUT_USER':
                console.log(action)
        default:
        return state
    }

}
export default ( state = {}, action) => {

    switch(action.type) {
        case 'LOGIN_USER':
            return {...state, user: action.user}
            case 'CURRENT_USER': 
            return {...state, user: action.payload.user}
           
            case 'LOGOUT_USER':
               
                return {state: null}
        default:
        return state
    }

}
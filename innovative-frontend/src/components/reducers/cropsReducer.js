export default (state = [], action) => {
    switch(action.type) {
        case 'ADD_CROP':  
            return [...state, action.crop]
            case 'GET_CROPS':
              
                return action.crops
            default:
                return state
    }
}
export default (state = [], action) => {
    switch(action.type) {
        case 'ADD_CROP':  
            return [...state, action.crop]
            case 'GET_CROPS':
                // console.log(action)
                return action.crops
            default:
                return state
    }
}
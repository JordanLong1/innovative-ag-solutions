export default (state = [], action) => {
    switch(action.type) {
        case 'ADD_CROP':
           
            return [...state, action.crop]
            default:
                return state
    }
}
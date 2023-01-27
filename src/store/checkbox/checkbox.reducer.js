const checkboxReducer = (state = null, action) => {
    switch(action.type) {
        case 'SET-CHECKBOX':
            return !state
        default:
            return state
    }
};

export default checkboxReducer;
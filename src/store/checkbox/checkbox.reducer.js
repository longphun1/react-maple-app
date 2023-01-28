const checkboxReducer = (state = null, action) => {
    switch(action.type) {
        case 'SET-CHECKBOX':
            return {
                ...state,
                [action.payload]: !state[action.payload],
            }
        default:
            return state
    }
};

export default checkboxReducer;
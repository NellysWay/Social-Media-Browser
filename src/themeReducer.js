// reducer function - pure function - does not perform any side effects ex. outside variables
// put in the same input will be the same output, only returns a new state

export const themeReducer = (state, action) => {
    switch (action.type) {
        case 'LIGHTMODE':
            return { darkMode: false };
        case 'DARKMODE':
            return { darkMode: true };
        default:
            return state;
    }
} //actions are actions you want to do to state. Ex. increment count

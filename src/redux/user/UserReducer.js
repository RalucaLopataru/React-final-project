import UserConstants from "./UserConstants";
const initialState = {
    users: []
}

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case UserConstants.ADD_USER:
            const newState = {
                ...state,
                users: [
                    ...state.users,
                    action.payload
                ]
            }
            return newState;
        
        default:
            return state;

        
    }
}

export default userReducer;
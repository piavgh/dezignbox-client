import * as AuthActionTypes from '../actiontypes/auth.actiontypes';

const initialState = {
    isLoggingIn: false,
    isLoggedIn: false,
    currentUser: null
};

export default function Auth(state = initialState, action) {
    switch (action.type) {
        case AuthActionTypes.LOGIN_REQUEST:
            return {
                ...state,
                isLoggingIn: true
            };
        case AuthActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                currentUser: action.user
            };
        case AuthActionTypes.LOGIN_FAILURE:
            return state;
        default:
            return state;
    }
}

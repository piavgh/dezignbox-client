import * as AuthActionTypes from '../actiontypes/auth.actiontypes';

const initialState = {
    isLoginPending: false,
    isLoginSuccess: false,
    isLoginError: {},
    currentUser: null
};

export default function Auth(state = initialState, action) {
    switch (action.type) {
        case AuthActionTypes.SET_LOGIN_PENDING:
            return {
                ...state,
                isLoginPending: true,
                isLoginSuccess: false,
                isLoginError: {},
                currentUser: null
            };
        case AuthActionTypes.SET_LOGIN_SUCCESS:
            return {
                ...state,
                isLoginPending: false,
                isLoginSuccess: true,
                isLoginError: {}
            };
        case AuthActionTypes.SET_LOGIN_ERROR:
            return {
                ...state,
                isLoginPending: false,
                isLoginSuccess: false,
                isLoginError: action.error,
                currentUser: null
            };
        case AuthActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.currentUser
            };
        default:
            return state;
    }
}

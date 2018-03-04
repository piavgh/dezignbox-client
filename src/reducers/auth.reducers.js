import * as AuthActionTypes from '../actiontypes/auth.actiontypes';

const initialState = {
    isLoginPending: false,
    isLoginSuccess: false,
    isLoginError: {},
    currentUser: null,
    isRegisterPending: false,
    isRegisterSuccess: false,
    isRegisterError: {},
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
        case AuthActionTypes.SET_REGISTER_PENDING:
            return {
                ...state,
                isRegisterPending: true,
                isRegisterSuccess: false,
                isRegisterError: {},
                currentUser: null
            };
        case AuthActionTypes.SET_REGISTER_SUCCESS:
            return {
                ...state,
                isRegisterPending: false,
                isRegisterSuccess: true,
                isRegisterError: {}
            };
        case AuthActionTypes.SET_REGISTER_ERROR:
            return {
                ...state,
                isRegisterPending: false,
                isRegisterSuccess: false,
                isRegisterError: action.error,
                currentUser: null
            };
        default:
            return state;
    }
}

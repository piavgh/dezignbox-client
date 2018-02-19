import * as AuthActionTypes from '../actiontypes/auth.actiontypes';

const initialState = {
    isLoginPending: false,
    isLoginSuccess: false,
    isLoginError: false,
    currentUser: null
};

export default function Auth(state = initialState, action) {
    switch (action.type) {
        case AuthActionTypes.SET_LOGIN_PENDING:
            return {
                ...state,
                isLoginPending: true,
                isLoginSuccess: false,
                isLoginError: false
            };
        case AuthActionTypes.SET_LOGIN_SUCCESS:
            return {
                ...state,
                isLoginPending: false,
                isLoginSuccess: true,
                isLoginError: false
            };
        case AuthActionTypes.SET_LOGIN_ERROR:
            return {
                ...state,
                isLoginPending: false,
                isLoginSuccess: false,
                isLoginError: true
            };
        default:
            return state;
    }
}

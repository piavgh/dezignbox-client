import * as AuthActionTypes from '../actiontypes/auth.actiontypes';

export const setLoginPending = isLoginPending => {
    return {
        type: AuthActionTypes.SET_LOGIN_PENDING,
        isLoginPending
    }
};

export const setLoginSuccess = isLoginSuccess => {
    return {
        type: AuthActionTypes.SET_LOGIN_SUCCESS,
        isLoginSuccess
    }
};

export const setLoginError = isLoginError => {
    return {
        type: AuthActionTypes.SET_LOGIN_ERROR,
        isLoginError
    }
};

export const setCurrentUser = currentUser => {
    return {
        type: AuthActionTypes.SET_CURRENT_USER,
        currentUser
    }
};


import * as AuthActionTypes from '../actiontypes/auth.actiontypes';
import AuthService from '../services/auth.services';

export const login = (email, password) => {
    return dispatch => {
        dispatch(setLoginPending(true));
        dispatch(setLoginSuccess(false));
        dispatch(setLoginError(null));

        AuthService.login(email, password, error => {
            dispatch(setLoginPending(false));
            if (!error) {
                dispatch(setLoginSuccess(true));
            } else {
                dispatch(setLoginError(error));
            }
        });
    }
};

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


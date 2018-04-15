import * as AuthActionTypes from '../actiontypes/auth.actiontypes';
import * as AlertActionCreators from './alert.actions';
import AuthService from "../services/auth.services";
import Auth from "../helpers/auth";
import {setAlertSuccess} from "./alert.actions";
import {setAlertError} from "./alert.actions";

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

export const setRegisterPending = isRegisterPending => {
    return {
        type: AuthActionTypes.SET_REGISTER_PENDING,
        isRegisterPending
    }
};

export const setRegisterSuccess = isRegisterSuccess => {
    return {
        type: AuthActionTypes.SET_REGISTER_SUCCESS,
        isRegisterSuccess
    }
};

export const setRegisterError = isRegisterError => {
    return {
        type: AuthActionTypes.SET_REGISTER_ERROR,
        isRegisterError
    }
};

export const logout = () => {
    return {
        type: AuthActionTypes.LOGOUT
    }
};

export const login = (email, password) => {

    return (dispatch) => {
        dispatch(setLoginPending(true));

        AuthService.login(email, password, (error, data) => {
            dispatch(setLoginPending(false));
            if (!error) {
                dispatch(setLoginSuccess(true));
                dispatch(setCurrentUser(data.currentUser));
                Auth.authenticateUser(data.token);
                dispatch(AlertActionCreators.setAlertSuccess(`Welcome back ${data.currentUser.email}`));
            } else {
                dispatch(setLoginError({message: error}));
                dispatch(AlertActionCreators.setAlertError(error));
            }
        });
    };
};

export const register = (email, password) => {
    return (dispatch) => {
        dispatch(setRegisterPending(true));

        AuthService.register(email, password, (error) => {
            dispatch(setRegisterPending(false));
            if (!error) {
                dispatch(setRegisterSuccess(true));
                dispatch(setAlertSuccess(`You've successfully registered!`));
            } else {
                dispatch(setRegisterError({message: error}));
                dispatch(setAlertError(error));
            }
        });
    }
};

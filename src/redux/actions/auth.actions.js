import * as AuthActionTypes from '../actiontypes/auth.actiontypes';
import * as AlertActionCreators from './alert.actions';
import AuthService from "../../services/auth.services";
import Auth from "../../helpers/auth";

export const setLoginPending = isLoginPending => {
    return {
        type: AuthActionTypes.SET_LOGIN_PENDING,
        isLoginPending
    }
};

export const setLoginSuccess = isAuthenticated => {
    return {
        type: AuthActionTypes.SET_LOGIN_SUCCESS,
        isAuthenticated
    }
};

export const setLoginError = loginError => {
    return {
        type: AuthActionTypes.SET_LOGIN_ERROR,
        loginError
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
    Auth.deAuthenticateUser();
    return {
        type: AuthActionTypes.LOGOUT
    }
};

export const loginAction = (email, password) => {

    return (dispatch) => {
        dispatch(setLoginPending(true));

        AuthService.login(email, password, (error, data) => {
            dispatch(setLoginPending(false));
            if (!error) {
                dispatch(setCurrentUser(data.currentUser));
                Auth.authenticateUser(data.token);
                dispatch(setLoginSuccess(true));
                dispatch(AlertActionCreators.setAlertSuccess(`Welcome back ${data.currentUser.email}`));
            } else {
                if (error.response.status === 401) {
                    let message = 'Invalid email and password';
                    dispatch(setLoginError({
                        message: message
                    }));
                    dispatch(AlertActionCreators.setAlertError(message));
                } else {
                    dispatch(setLoginError({
                        message: error.response.data
                    }));
                    dispatch(AlertActionCreators.setAlertError(error.response.data));
                }
            }
        });
    };
};

export const registerAction = (email, password) => {
    return (dispatch) => {
        dispatch(setRegisterPending(true));

        AuthService.register(email, password, (error) => {
            dispatch(setRegisterPending(false));
            if (!error) {
                dispatch(setRegisterSuccess(true));
                dispatch(AlertActionCreators.setAlertSuccess(`You've successfully registered!`));
            } else {
                dispatch(setRegisterError({message: error}));
                dispatch(AlertActionCreators.setAlertError(error));
            }
        });
    }
};


export const loadUserFromToken = () => {
    return (dispatch) => {
        let token = localStorage.getItem('token');
        if (!token || token === '') {//if there is no token, dont bother
            return;
        }

        AuthService.loadUserFromToken(token, (err, response) => {
            if (!err) {
                dispatch(setCurrentUser(response.data.user));
                dispatch(setLoginSuccess(true));
            } else {
                dispatch(setLoginError({
                    message: err
                }));
            }
        });
    }
};

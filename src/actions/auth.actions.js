import * as AuthActionTypes from '../actiontypes/auth.actiontypes';

export const loginRequest = user => {
    return {
        type: AuthActionTypes.LOGIN_REQUEST,
        user
    }
};

export const loginSuccess = user => {
    return {
        type: AuthActionTypes.LOGIN_SUCCESS,
        user
    }
};

export const loginFailure = user => {
    return {
        type: AuthActionTypes.LOGIN_FAILURE,
        user
    }
};


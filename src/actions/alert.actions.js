import {AlertActionTypes} from '../actiontypes/alert.actiontypes';

export const AlertActionCreators = {
    setAlertSuccess,
    setAlertError,
    clearAlert
};

function setAlertSuccess(message) {
    return {
        type: AlertActionTypes.SUCCESS,
        message
    };
}

function setAlertError(message) {
    return {
        type: AlertActionTypes.ERROR,
        message
    };
}

function clearAlert() {
    return {
        type: AlertActionTypes.CLEAR
    };
}

import AlertActionTypes from '../actiontypes/alert.actiontypes';

export const setAlertSuccess = (message) => {
  return {
    type: AlertActionTypes.SUCCESS,
    message
  };
};

export const setAlertError = (message) => {
  return {
    type: AlertActionTypes.ERROR,
    message
  };
};

export const clearAlert = () => {
  return {
    type: AlertActionTypes.CLEAR
  };
};

import AlertActionTypes from '../actiontypes/alert.actiontypes';

const initialState = {};

export default function alert(state = initialState, action) {
  switch (action.type) {
    case AlertActionTypes.SUCCESS:
      return {
        type: 'alert-success',
        message: action.message
      };
    case AlertActionTypes.ERROR:
      return {
        type: 'alert-danger',
        message: action.message
      };
    case AlertActionTypes.CLEAR:
      return {};
    default:
      return state;
  }
}

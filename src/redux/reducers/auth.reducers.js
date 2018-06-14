import * as AuthActionTypes from '../actiontypes/auth.actiontypes';

const initialState = {
  isLoginPending: false,
  isAuthenticated: false,
  loginError: {},
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
        isAuthenticated: false,
        loginError: {},
        currentUser: null
      };
    case AuthActionTypes.SET_LOGIN_SUCCESS:
      return {
        ...state,
        isLoginPending: false,
        isAuthenticated: true,
        loginError: {}
      };
    case AuthActionTypes.SET_LOGIN_ERROR:
      return {
        ...state,
        isLoginPending: false,
        isAuthenticated: false,
        loginError: action.loginError,
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
        isRegisterError: action.isRegisterError,
        currentUser: null
      };
    case AuthActionTypes.LOGOUT:
      return {
        ...state,
        isLoginPending: false,
        isAuthenticated: false,
        loginError: {},
        currentUser: null,
      };
    default:
      return state;
  }
}

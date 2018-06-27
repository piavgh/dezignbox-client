import {
  SET_LOGIN_PENDING,
  SET_LOGIN_SUCCESS,
  SET_LOGIN_ERROR,
  SET_CURRENT_USER,
  SET_REGISTER_PENDING,
  SET_REGISTER_SUCCESS,
  SET_REGISTER_ERROR,
  LOGOUT
} from '../actiontypes/auth.actiontypes';

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
    case SET_LOGIN_PENDING:
      return {
        ...state,
        isLoginPending: true,
        isAuthenticated: false,
        loginError: {},
        currentUser: null
      };
    case SET_LOGIN_SUCCESS:
      return {
        ...state,
        isLoginPending: false,
        isAuthenticated: true,
        loginError: {}
      };
    case SET_LOGIN_ERROR:
      return {
        ...state,
        isLoginPending: false,
        isAuthenticated: false,
        loginError: action.loginError,
        currentUser: null
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.currentUser
      };
    case SET_REGISTER_PENDING:
      return {
        ...state,
        isRegisterPending: true,
        isRegisterSuccess: false,
        isRegisterError: {},
        currentUser: null
      };
    case SET_REGISTER_SUCCESS:
      return {
        ...state,
        isRegisterPending: false,
        isRegisterSuccess: true,
        isRegisterError: {}
      };
    case SET_REGISTER_ERROR:
      return {
        ...state,
        isRegisterPending: false,
        isRegisterSuccess: false,
        isRegisterError: action.isRegisterError,
        currentUser: null
      };
    case LOGOUT:
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

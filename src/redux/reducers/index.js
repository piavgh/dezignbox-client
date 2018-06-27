import {combineReducers} from 'redux'
import authReducer from './auth.reducers';
import alertReducer from './alert.reducers';
import campaignsReducer from './campaigns.reducers';
import ordersReducer from './orders.reducers';

export default combineReducers({
  authReducer,
  alertReducer,
  campaignsReducer,
  ordersReducer
});

import {combineReducers} from 'redux'
import auth from './auth.reducers';
import alert from './alert.reducers';
import campaignsReducer from './campaigns.reducers';
import ordersReducer from './orders.reducers';

export default combineReducers({
  auth,
  alert,
  campaignsReducer,
  ordersReducer
});

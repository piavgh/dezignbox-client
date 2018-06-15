import {combineReducers} from 'redux'
import auth from './auth.reducers';
import alert from './alert.reducers';
import campaign from './campaigns.reducers';

export default combineReducers({
  auth,
  alert,
  campaign
});

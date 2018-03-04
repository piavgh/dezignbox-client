import { combineReducers } from 'redux'
import auth from './auth.reducers';
import alert from './alert.reducers';

export default combineReducers({
    auth,
    alert
});

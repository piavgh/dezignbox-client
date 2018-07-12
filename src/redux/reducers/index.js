import {combineReducers} from 'redux';
import authReducer from './auth.reducers';
import alertReducer from './alert.reducers';
import campaignsReducer from './campaigns.reducers';
import transactionsReducer from './transactions.reducers';
import adminTransactionsReducer from '../../admin/redux/reducers/transactions.reducers';

export default combineReducers({
  authReducer,
  alertReducer,
  campaignsReducer,
  transactionsReducer,
  adminTransactionsReducer
});

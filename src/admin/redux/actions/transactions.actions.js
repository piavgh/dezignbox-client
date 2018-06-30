import TransactionsActionTypes from '../actiontypes/transactions.actiontypes';
import TransactionsService from '../../services/transactions.services';

export const fetchTransactions = (page) => ({
  type: TransactionsActionTypes.FETCH_TRANSACTIONS,
  payload: TransactionsService.fetchTransactions(page)
});

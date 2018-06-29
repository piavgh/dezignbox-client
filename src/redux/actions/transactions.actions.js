import TransactionsActionTypes from '../actiontypes/transactions.actiontypes';
import TransactionsService from '../../services/transactions.services';

export const handleCheckoutInfoInputChange = (field, value, params) => ({
  type: TransactionsActionTypes.UPDATE_CHECKOUT_INFO,
  field,
  value,
  params
});

export const createTransaction = (ownerId, campaignId, transaction) => ({
  type: TransactionsActionTypes.CREATE,
  payload: TransactionsService.createTransaction(ownerId, campaignId, transaction)
});

export const fetchTransactions = (userId, page) => ({
  type: TransactionsActionTypes.FETCH_TRANSACTIONS,
  payload: TransactionsService.fetchTransactions(userId, page)
});

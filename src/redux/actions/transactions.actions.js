import TransactionsActiontypes from '../actiontypes/transactions.actiontypes';
import TransactionsService from '../../services/transactions.services';

export const handleCheckoutInfoInputChange = (field, value, params) => ({
  type: TransactionsActiontypes.UPDATE_CHECKOUT_INFO,
  field,
  value,
  params
});

export const createTransaction = (ownerId, campaignId, transaction) => ({
  type: TransactionsActiontypes.CREATE,
  payload: TransactionsService.createTransaction(ownerId, campaignId, transaction)
});

export const fetchTransactions = (userId, page) => ({
  type: TransactionsActiontypes.FETCH_TRANSACTIONS,
  payload: TransactionsService.fetchTransactions(userId, page)
});

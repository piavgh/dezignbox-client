import BaseService from './base.service';

const transactionsRoutesPrefix = "/api/v1/transactions";

const TransactionsService = {
  createTransaction: (ownerId, campaignId, transaction) => {
    return BaseService.post(transactionsRoutesPrefix + '/', {
      owner: ownerId,
      campaign: campaignId,
      numberOfItems: transaction.numberOfItems,
      fullName: transaction.fullName,
      phone: transaction.phone,
      address: transaction.address,
      city: transaction.city,
      shippingMethod: transaction.shippingMethod,
      paymentMethod: transaction.paymentMethod,
      status: 1
    }, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
  },

  fetchTransactions: (userId, page = 1) => {
    return BaseService.get(transactionsRoutesPrefix + '/', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      params: {
        userId: userId,
        page: page
      }
    });
  },

  fetchTransactionDetail: (id) => {
    return BaseService.get(transactionsRoutesPrefix + '/' + id, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
  }
};

export default TransactionsService;

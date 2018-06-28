import BaseService from './base.service';

const ordersRoutesPrefix = "/api/v1/transactions";

const TransactionsService = {
  createTransaction: (ownerId, campaignId, order) => {
    return BaseService.post(ordersRoutesPrefix + '/', {
      owner: ownerId,
      campaign: campaignId,
      numberOfItems: order.numberOfItems,
      fullName: order.fullName,
      address: order.address,
      city: order.city,
      shippingMethod: order.shippingMethod,
      paymentMethod: order.paymentMethod,
      status: 1
    }, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
  },

  fetchTransactions: (userId, page = 1) => {
    return BaseService.get(ordersRoutesPrefix + '/', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      params: {
        userId: userId,
        page: page
      }
    });
  },
};

export default TransactionsService;

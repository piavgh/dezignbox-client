import BaseService from './base.service';

const ordersRoutesPrefix = "/api/v1/orders";

const OrdersService = {
  createOrder: (ownerId, campaignId, order) => {
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
};

export default OrdersService;

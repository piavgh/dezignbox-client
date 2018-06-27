import OrdersActionTypes from '../actiontypes/orders.actiontypes';
import OrdersService from '../../services/orders.services';

export const handleCheckoutInfoInputChange = (field, value, params) => ({
  type: OrdersActionTypes.UPDATE_CHECKOUT_INFO,
  field,
  value,
  params
});

export const createOrder = (ownerId, campaignId, order) => ({
  type: OrdersActionTypes.CREATE,
  payload: OrdersService.createOrder(ownerId, campaignId, order)
});

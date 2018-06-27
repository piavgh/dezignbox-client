import OrdersActionTypes from '../actiontypes/orders.actiontypes';

const initialState = {
  loading: false,
  createOrderSuccess: false,
  createOrderError: {},
  checkout: {
    numberOfItems: 100,
    fullName: '',
    address: '',
    city: 1,
    shippingMethod: 1,
    paymentMethod: 1
  }
};

export default function OrdersReducers(state = initialState, action) {
  let checkout;

  switch (action.type) {
    case OrdersActionTypes.UPDATE_CHECKOUT_INFO:
      if (action.params.reduxField === 'checkout') {
        checkout = state.checkout;
        checkout[action.field] = action.value;

        return {
          ...state,
          checkout
        };
      } else {
        break;
      }

    case OrdersActionTypes.CREATE_PENDING:
      return {
        ...state,
        loading: true
      };
    case OrdersActionTypes.CREATE_FULFILLED:
      return {
        ...state,
        loading: false,
        createOrderSuccess: true,
        checkout: {
          numberOfItems: 100,
          fullName: '',
          address: '',
          city: 1,
          shippingMethod: 1,
          paymentMethod: 1
        },
        createOrderError: {}
      };
    case OrdersActionTypes.CREATE_REJECTED:
      return {
        ...state,
        loading: false,
        createOrderError: action.payload
      };

    default:
      return state;
  }
}

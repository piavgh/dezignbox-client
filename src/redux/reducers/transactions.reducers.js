import TransactionsActionTypes from '../actiontypes/transactions.actiontypes';

const initialState = {
  items: [],
  loading: false,
  error: null,
  detail: null,
  createOrderSuccess: false,
  createOrderError: {},
  checkout: {
    numberOfItems: 100,
    fullName: '',
    phone: '',
    address: '',
    city: 1,
    shippingMethod: 1,
    paymentMethod: 1
  }
};

export default function TransactionsReducers(state = initialState, action) {
  let checkout;

  switch (action.type) {
    case TransactionsActionTypes.UPDATE_CHECKOUT_INFO:
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

    case TransactionsActionTypes.CREATE_PENDING:
      return {
        ...state,
        loading: true
      };
    case TransactionsActionTypes.CREATE_FULFILLED:
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
    case TransactionsActionTypes.CREATE_REJECTED:
      return {
        ...state,
        loading: false,
        createOrderError: action.payload
      };

    case TransactionsActionTypes.FETCH_TRANSACTIONS_PENDING:
      return {
        ...state,
        loading: true,
        error: null
      };

    case TransactionsActionTypes.FETCH_TRANSACTIONS_FULFILLED:
      return {
        ...state,
        loading: false,
        items: action.payload.data.data
      };

    case TransactionsActionTypes.FETCH_TRANSACTIONS_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload.response.data.error,
        items: []
      };

    case TransactionsActionTypes.FETCH_TRANSACTION_DETAIL_PENDING:
      return {
        ...state,
        loading: true,
        error: null
      };

    case TransactionsActionTypes.FETCH_TRANSACTION_DETAIL_FULFILLED:
      return {
        ...state,
        loading: false,
        detail: action.payload.data.data
      };

    case TransactionsActionTypes.FETCH_TRANSACTION_DETAIL_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload.response.data.error,
        detail: null
      };

    default:
      return state;
  }
}

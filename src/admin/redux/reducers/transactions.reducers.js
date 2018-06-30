import TransactionsActionTypes from '../actiontypes/transactions.actiontypes';

const initialState = {
  items: [],
  loading: false,
  error: null
};

export default function TransactionsReducers(state = initialState, action) {

  switch (action.type) {

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

    default:
      return state;
  }
}

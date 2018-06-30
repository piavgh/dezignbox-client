import BaseService from '../../services/base.service';

const transactionsRoutesPrefix = "/admin/v1/transactions";

const TransactionsService = {

  fetchTransactions: (page = 1) => {
    return BaseService.get(transactionsRoutesPrefix + '/', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      params: {
        page: page
      }
    });
  },
};

export default TransactionsService;

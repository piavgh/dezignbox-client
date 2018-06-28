import React from 'react';
import PropTypes from 'prop-types';

import TransactionItem from "./TransactionItem";

const TransactionList = (
  {
    transactions
  }
) => (
  <div className="transaction-list">
    {
      transactions.map(transaction => {
        return (
          <TransactionItem
            id={transaction._id}
            status={transaction.active}
            key={transaction._id}/>
        )
      })
    }
  </div>
);

TransactionList.propTypes = {
  transactions: PropTypes.array.isRequired
};

export default TransactionList;


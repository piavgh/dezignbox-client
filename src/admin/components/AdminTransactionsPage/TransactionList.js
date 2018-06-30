import React, {Component} from 'react';
import PropTypes from 'prop-types';

import TransactionItem from "./TransactionItem";

export default class TransactionList extends Component {

  static propTypes = {
    transactions: PropTypes.array.isRequired
  };

  render() {
    if (this.props.transactions.length > 0) {
      return (
        <div className="transaction-list">
          {
            this.props.transactions.map(transaction => {
              return (
                <TransactionItem
                  id={transaction._id}
                  transactionId={transaction.transactionId}
                  createdAt={transaction.createdAt}
                  updatedAt={transaction.updatedAt}
                  campaignTitle={transaction.campaign.title}
                  campaignImage={transaction.campaign.canvasDataUrl}
                  numberOfItems={transaction.numberOfItems}
                  status={transaction.status}
                  key={transaction._id}/>
              )
            })
          }
        </div>
      );
    } else {
      return (
        <div className="transaction-list">
          There is no transaction yet.
        </div>
      )
    }
  }
}

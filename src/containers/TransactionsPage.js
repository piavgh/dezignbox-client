import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {
  Row,
  Col
} from 'reactstrap';

import '../components/TransactionsPage/TransactionsPage.css';
import TransactionList from "../components/TransactionsPage/TransactionList";
import {fetchTransactions} from "../redux/actions/transactions.actions";
import Pagination from "../components/Common/Pagination";
import Spinner from "../components/Common/Spinner";

class TransactionsPage extends Component {

  state = {
    pageCount: 0,
    perPage: 10,
    currentPage: 1
  };

  componentDidMount() {
    this.props.fetchTransactions(this.props.userId, this.state.currentPage)
      .then((data) => {
        this.setState({
          pageCount: data.value.data.extra.pageCount
        })
      });
  }

  handlePageChange = (pageNumber) => {
    if (pageNumber === this.state.currentPage) {
      return;
    }
    this.props.fetchTransactions(this.props.userId, pageNumber)
      .then((data) => {
        this.setState({
          pageCount: data.value.data.extra.pageCount,
          currentPage: pageNumber
        })
      });
  };

  render() {
    const {error, loading, transactions} = this.props;

    if (error) {
      return (
        <div>{error}</div>
      );
    }

    if (loading) {
      return (
        <Spinner
          show={loading}
          name="transactionsPageSpinner"/>
      )
    }

    return (
      <Row className="transactions-page">
        <Col xs={2}>

        </Col>
        <Col xs={10}>
          <h1>Transactions</h1>
          <TransactionList
            transactions={transactions}
          />
          <Pagination
            show={transactions.length > 0}
            pageCount={this.state.pageCount}
            currentPage={this.state.currentPage}
            handlePageChange={this.handlePageChange}/>
        </Col>
      </Row>
    );
  }

}

const mapStateToProps = state => ({
  userId: state.authReducer.currentUser._id,
  transactions: state.transactionsReducer.items,
  loading: state.transactionsReducer.loading,
  error: state.transactionsReducer.error
});

const mapDispatchToProps = dispatch => (
  {
    fetchTransactions: bindActionCreators(fetchTransactions, dispatch)
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionsPage);

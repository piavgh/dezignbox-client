import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {
  Row,
  Col,
  Button
} from 'reactstrap';

import "../css/TransactionDetailPage.css";
import {fetchTransactionDetail} from '../redux/actions/transactions.actions';
import Spinner from "../components/Common/Spinner";

class TransactionDetailPage extends Component {

  state = {
    showModal: false
  };

  componentDidMount() {
    this.props.fetchTransactionDetail(this.props.match.params.id).then((data) => {

    });
  }

  handleGoBack = () => {
    this.props.history.goBack();
  };

  render() {
    const {error, loading, transactionsReducer} = this.props;

    if (error) {
      return (
        <div>{error}</div>
      );
    }

    if (loading) {
      return (
        <Spinner
          show={loading}
          name="transactionDetailPageSpinner"/>
      )
    }

    if (transactionsReducer.detail) {
      return (
        <Row className="transaction-detail-page">
          <Col xs={12}>
            <p>Campaign: {transactionsReducer.detail.campaign.title}</p>
            <p>Number of items: {transactionsReducer.detail.numberOfItems}</p>
            <p>Full Name: {transactionsReducer.detail.fullName}</p>
            <p>Address: {transactionsReducer.detail.address}</p>
            <p>City: {transactionsReducer.detail.city}</p>
            <p>Shipping Method: {transactionsReducer.detail.shippingMethod}</p>
            <p>Payment Method: {transactionsReducer.detail.paymentMethod}</p>
            <p>Status: {transactionsReducer.detail.status}</p>
            <Button onClick={this.handleGoBack}>Back</Button>
          </Col>
        </Row>
      );
    } else {
      return (
        <div>
          Sorry, there is no information about this transaction
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  userId: state.authReducer.currentUser._id,
  transactionsReducer: state.transactionsReducer,
  loading: state.transactionsReducer.loading,
  error: state.transactionsReducer.error
});

const mapDispatchToProps = dispatch => (
  {
    fetchTransactionDetail: bindActionCreators(fetchTransactionDetail, dispatch)
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionDetailPage);


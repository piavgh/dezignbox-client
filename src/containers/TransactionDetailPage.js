import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {
  Row,
  Col,
  Button
} from 'reactstrap';

import "../components/TransactionDetailPage/TransactionDetailPage.css";
import {fetchTransactionDetail} from '../redux/actions/transactions.actions';
import Spinner from "../components/Common/Spinner";
import ShippingDetail from "../components/TransactionDetailPage/ShippingDetail";
import TransactionDetail from "../components/TransactionDetailPage/TransactionDetail";

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
        <Row className="transaction-detail-page__container">
          <Col xs={{size: 10, offset: 2}}>
            <ShippingDetail
              transactionId={transactionsReducer.detail.transactionId}
              fullName={transactionsReducer.detail.fullName}
              phone={transactionsReducer.detail.phone}
              address={transactionsReducer.detail.address}
              shippingMethod={transactionsReducer.detail.shippingMethod}
            />
            <TransactionDetail
              campaignTitle={transactionsReducer.detail.campaign.title}
              campaignImage={transactionsReducer.detail.campaign.canvasDataUrl}
              numberOfItems={transactionsReducer.detail.numberOfItems}
            />
            <Button className="btn button-back dz-button" onClick={this.handleGoBack}>Back</Button>
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


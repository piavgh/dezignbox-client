import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {
  Row,
  Col
} from 'reactstrap';

import "../css/CheckoutPage.css";
import Spinner from "../components/Common/Spinner";
import Utils from "../helpers/utils";
import CheckoutInfo from "../components/CheckoutPage/CheckoutInfo";
import {fetchCampaignDetail} from "../redux/actions/campaigns.actions";
import {handleCheckoutInfoInputChange, createTransaction} from "../redux/actions/transactions.actions";
import {setAlertSuccess, setAlertError} from "../redux/actions/alert.actions";

class CheckoutPage extends Component {

  componentDidMount() {
    this.props.fetchCampaignDetail(this.props.match.params.id).then((data) => {

    });
  }

  handleCheckoutInfoInputChange = (e) => {
    this.props.handleCheckoutInfoInputChange(
      e.target.id,
      Utils.handleOptionInput(e.target.value),
      {
        reduxField: "checkout"
      }
    );
  };

  handleGoBack = () => {
    this.props.history.goBack();
  };

  handlePlaceOrder = (e) => {
    e.preventDefault();
    this.props.createTransaction(
      this.props.userId,
      this.props.campaignsReducer.detail._id,
      this.props.transactionsReducer.checkout
    ).then(() => {
      this.props.history.push("/products");
      this.props.setAlertSuccess('Your information has been submitted.');
    }).catch((err) => {
      console.log(err);
      this.props.setAlertError(err);
    });
  };

  render() {
    const {error, loading, campaignsReducer, transactionsReducer} = this.props;

    if (error) {
      return (
        <div>{error}</div>
      );
    }

    if (loading) {
      return (
        <Spinner
          show={loading}
          name="checkoutPageSpinner"/>
      )
    }

    if (campaignsReducer.detail) {
      return (
        <Row className="checkout-page">
          <Col xs={{size: 10, offset: 1}} lg={{size: 6, offset: 0}}>
            <CheckoutInfo
              numberOfItems={transactionsReducer.checkout.numberOfItems}
              fullName={transactionsReducer.checkout.fullName}
              address={transactionsReducer.checkout.address}
              city={transactionsReducer.checkout.city}
              shippingMethod={transactionsReducer.checkout.shippingMethod}
              paymentMethod={transactionsReducer.checkout.paymentMethod}
              handleInputChange={this.handleCheckoutInfoInputChange}
              handleGoBack={this.handleGoBack}
              handleFormSubmit={this.handlePlaceOrder}/>
          </Col>

          <Col xs={{size: 10, offset: 1}} lg={{size: 6, offset: 0}}>
            <img src={campaignsReducer.detail.canvasDataUrl} alt="canvasDataUrl"/>
          </Col>
        </Row>
      );
    } else {
      return (
        <div>
          Sorry, there is no information about this campaign
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  userId: state.authReducer.currentUser._id,
  campaignsReducer: state.campaignsReducer,
  transactionsReducer: state.transactionsReducer,
  loading: state.campaignsReducer.loading || state.transactionsReducer.loading,
  error: state.campaignsReducer.error
});

const mapDispatchToProps = dispatch => (
  {
    fetchCampaignDetail: bindActionCreators(fetchCampaignDetail, dispatch),
    handleCheckoutInfoInputChange: bindActionCreators(handleCheckoutInfoInputChange, dispatch),
    createTransaction: bindActionCreators(createTransaction, dispatch),
    setAlertSuccess: bindActionCreators(setAlertSuccess, dispatch),
    setAlertError: bindActionCreators(setAlertError, dispatch)
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutPage);


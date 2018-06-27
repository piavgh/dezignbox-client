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
import {handleCheckoutInfoInputChange, createOrder} from "../redux/actions/orders.actions";
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
    this.props.createOrder(
      this.props.userId,
      this.props.campaignsReducer.detail._id,
      this.props.ordersReducer.checkout
    ).then(() => {
      this.props.history.push("/products");
      this.props.setAlertSuccess('Your information has been submitted.');
    }).catch((err) => {
      console.log(err);
      this.props.setAlertError(err);
    });
  };

  render() {
    const {error, loading, campaignsReducer, ordersReducer} = this.props;

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
              numberOfItems={ordersReducer.checkout.numberOfItems}
              fullName={ordersReducer.checkout.fullName}
              address={ordersReducer.checkout.address}
              city={ordersReducer.checkout.city}
              shippingMethod={ordersReducer.checkout.shippingMethod}
              paymentMethod={ordersReducer.checkout.paymentMethod}
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
  ordersReducer: state.ordersReducer,
  loading: state.campaignsReducer.loading || state.ordersReducer.loading,
  error: state.campaignsReducer.error
});

const mapDispatchToProps = dispatch => (
  {
    fetchCampaignDetail: bindActionCreators(fetchCampaignDetail, dispatch),
    handleCheckoutInfoInputChange: bindActionCreators(handleCheckoutInfoInputChange, dispatch),
    createOrder: bindActionCreators(createOrder, dispatch),
    setAlertSuccess: bindActionCreators(setAlertSuccess, dispatch),
    setAlertError: bindActionCreators(setAlertError, dispatch)
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutPage);


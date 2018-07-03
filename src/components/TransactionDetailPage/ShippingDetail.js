import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col
} from 'reactstrap';

export default class ShippingDetail extends Component {

  static propTypes = {
    transactionId: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    shippingMethod: PropTypes.number.isRequired
  };

  render() {
    let shippingMethod;
    if (this.props.shippingMethod === 1) {
      shippingMethod = 'Giao hàng tận nơi';
    } else {
      shippingMethod = 'Không xác định';
    }

    return (
      <div className="transaction-detail-page__shipping__container-wrapper">
        <div className="shipping-border"/>
        <div className="transaction-detail-page__shipping__container">
          <Row className="transaction-detail-page__shipping__header">
            <Col xs={6}>
              <span className="transaction-detail-page__shipping__header__title">Shipping Method</span>
            </Col>
            <Col xs={6} className="transaction-detail-page__shipping__header__tracking-info_container">
              <span className="transaction-detail-page__shipping__header__tracking-info">{shippingMethod} | Mã Vận Đơn. {this.props.transactionId}</span>
            </Col>
          </Row>
          <Row className="transaction-detail-page__shipping__content">
            <Col xs={3}>
              <p className="transaction-detail-page__shipping__shipping-address__shipping-name">{this.props.fullName}</p>
              <p className="transaction-detail-page__shipping__shipping-address__shipping-phone">{this.props.phone}</p>
              <p className="transaction-detail-page__shipping__shipping-address-detail">{this.props.address}</p>
            </Col>
            <Col xs={9}>

            </Col>
          </Row>
        </div>
        <div className="shipping-border"/>
      </div>
    )
  }
}

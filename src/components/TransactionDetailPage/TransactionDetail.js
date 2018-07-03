import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col
} from 'reactstrap';

export default class TransactionDetail extends Component {

  static propTypes = {
    campaignTitle: PropTypes.string.isRequired,
    campaignImage: PropTypes.string.isRequired,
    numberOfItems: PropTypes.number.isRequired
  };

  render() {
    return (
      <div className="transaction-detail-page__main-content-wrapper">
        <div className="transaction-detail-page__order-content-wrapper">
          <Row>
            <Col xs={2}>
              <img src={this.props.campaignImage} alt={this.props.campaignTitle}/>
            </Col>
            <Col cs={6}>
              <p>{this.props.campaignTitle}</p>
              <p>x {this.props.numberOfItems}</p>
            </Col>
          </Row>
        </div>
        <Row className="payment-detail__container">

        </Row>

      </div>
    )
  }
}

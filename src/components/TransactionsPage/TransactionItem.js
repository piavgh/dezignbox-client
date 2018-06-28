import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Badge
} from 'reactstrap';
import {Link} from 'react-router-dom';
import moment from 'moment';

import Utils from '../../helpers/utils';

export default class TransactionItem extends Component {

  static propTypes = {
    id: PropTypes.string.isRequired,
    transactionId: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired,
    campaignTitle: PropTypes.string.isRequired,
    campaignImage: PropTypes.string.isRequired,
    numberOfItems: PropTypes.number.isRequired,
    status: PropTypes.number.isRequired
  };

  render() {
    return (
      <Row className="transaction-item">
        <Col xs={12}>
          <Row className="transaction-item-header">
            <Col xs={12}>
              <p className="transaction-id">Transaction <Link to={"/transactions/" + this.props.id}>#{this.props.transactionId}</Link></p>
              <p className="transaction-created-date">Placed on {moment(this.props.createdAt).format('DD/MM/YYYY')}</p>
            </Col>
          </Row>
          <Row className="transaction-item-body">
            <Col xs={2}>
              <img className="transaction-campaign-image" src={this.props.campaignImage} alt={this.props.campaignTitle}/>
            </Col>
            <Col xs={4}>
              <span className="transaction-campaign-title">{this.props.campaignTitle}</span>
            </Col>
            <Col xs={2}>
              <span><span className="transaction-qty-string">Qty:</span> <span className="transaction-qty">{this.props.numberOfItems}</span></span>
            </Col>
            <Col xs={2}>
              <Badge color="secondary"><span className="transaction-status">{Utils.processTransactionStatus(this.props.status)}</span></Badge>
            </Col>
            <Col xs={2}>
              {
                this.props.status === 2
                  ?
                  <Badge color="success"><span className="transaction-delivery">Đã được giao vào {moment(this.props.updatedAt).format('DD/MM/YYYY')}</span></Badge>
                  :
                  <Badge color="secondary"><span className="transaction-delivery">Chưa giao hàng</span></Badge>
              }
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

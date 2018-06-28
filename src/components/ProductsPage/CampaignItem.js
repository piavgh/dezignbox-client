import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col
} from 'reactstrap';
import {Link} from 'react-router-dom';

export default class CampaignItem extends Component {

  static propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired
  };

  render() {
    return (
      <Row className="campaign-item">
        <Col xs={3}>
          <img className="campaign-image" src={this.props.image} alt={this.props.title}/>
        </Col>
        <Col xs={5}>
          <Link to={"/products/" + this.props.id} className="campaign-title">{this.props.title}</Link>
        </Col>
        <Col xs={1}>
          <span className={this.props.status ? "campaign-status active" : "campaign-status inactive"}/>
        </Col>
        <Col xs={3}>
          <Link className="place-order-btn" to={"/checkout/" + this.props.id}>Place Order</Link>
        </Col>
      </Row>
    )
  }
}

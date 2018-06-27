import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col
} from 'reactstrap';
import {Link} from 'react-router-dom';

const Campaign = (
  {
    id,
    title,
    image,
    status,
    handleDelete
  }
) => (
  <Row className="campaign-item">
    <Col xs={3}>
      <img className="campaign-image" src={image} alt={title}/>
    </Col>
    <Col xs={5}>
      <Link to={"/products/" + id} className="campaign-title">{title}</Link>
    </Col>
    <Col xs={1}>
      <span className={status ? "campaign-status active" : "campaign-status inactive"}/>
    </Col>
    <Col xs={3}>
      <Link className="place-order-btn" to={"/checkout/" + id}>Place Order</Link>
    </Col>
  </Row>
);

Campaign.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default Campaign;

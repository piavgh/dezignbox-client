import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col
} from 'reactstrap';
import {Link} from 'react-router-dom';

const Campaign = (
  {
    title,
    image,
    status
  }
) => (
  <Row className="campaign-item">
    <Col xs={3}>
      <img className="campaign-image" src={image} alt={title}/>
    </Col>
    <Col xs={5}>
      <Link to="#" className="campaign-title">{title}</Link>
    </Col>
    <Col xs={1}>
      <span className={status ? "campaign-status active" : "campaign-status inactive"}/>
    </Col>
    <Col xs={3}>
      <ul>
        <li><i className="far fa-edit"/></li>
        <li><i className="far fa-trash-alt"/></li>
        <li><i className="fas fa-cog"/></li>
      </ul>
    </Col>
  </Row>
);

Campaign.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired
};

export default Campaign;

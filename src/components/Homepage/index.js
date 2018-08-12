import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col
} from 'reactstrap';

import "./HomePage.css";

const Homepage = props => {

  return (
    <div className="homepage">

      <Row className="banner">
        <Col xs={12}>
          <p>{props.slogan}</p>
          <img src="/images/banner.jpg" alt="banner"/>
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <p>Recommendations For You</p>
        </Col>
        <Col xs={4}>
          <img src="/images/box1.jpg" alt="box1"/>
        </Col>
        <Col xs={4}>
          <img src="/images/box2.jpg" alt="box2"/>
        </Col>
        <Col xs={4}>
          <img src="/images/box3.jpg" alt="box3"/>
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <p>Staff Picks</p>
        </Col>
        <Col xs={4}>
          <img src="/images/box4.jpg" alt="box4"/>
        </Col>
        <Col xs={4}>
          <img src="/images/box5.jpg" alt="box5"/>
        </Col>
        <Col xs={4}>
          <img src="/images/box6.jpg" alt="box6"/>
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <p>Most Viewed</p>
        </Col>
        <Col xs={4}>
          <img src="/images/box7.jpg" alt="box4"/>
        </Col>
        <Col xs={4}>
          <img src="/images/box8.jpg" alt="box5"/>
        </Col>
        <Col xs={4}>
          <img src="/images/box9.jpg" alt="box6"/>
        </Col>
      </Row>
    </div>
  );
};

Homepage.propTypes = {
  slogan: PropTypes.string.isRequired
};

export default Homepage;

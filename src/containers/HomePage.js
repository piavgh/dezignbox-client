import React, {Component} from 'react';
import {
  Row,
  Col
} from 'reactstrap';

import "./HomePage.css";

export default class HomePage extends Component {

  render() {
    return (
      <div className="homepage">

        <Row className="banner">
          <Col xs={12}>
            <p>It's time to do you</p>
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
  }
}

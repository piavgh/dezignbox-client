import React, {Component} from 'react';
import {
  Row,
  Col
} from 'reactstrap';

export default class Footer extends Component {

  render() {
    return (
      <div className="footer">
        <div className="container">
          <Row>
            <Col xs={3}>
              <span><span><i className="far fa-copyright"/></span> 2018 Dezignbox, Inc.</span>
            </Col>
            <Col xs={3}>

            </Col>
            <Col xs={3}>

            </Col>
            <Col xs={3} className="social-network-container">
              <a href="https://www.facebook.com/Dezignbox-179803586196059" target="_blank" rel="noopener noreferrer">
                <span className="social-network-icon"><i className="fab fa-facebook-f"/>
                </span>
              </a>
              <span className="social-network-icon"><i className="fab fa-twitter"/></span>
              <span className="social-network-icon"><i className="fab fa-instagram"/></span>
              <span className="social-network-icon"><i className="fab fa-pinterest"/></span>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}
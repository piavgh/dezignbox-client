import React, {Component} from 'react';
import {
  Row,
  Col
} from 'reactstrap';
import {Link} from 'react-router-dom';

export default class Footer extends Component {

  render() {
    return (
      <div className="footer">
        <div className="container">
          <Row className="footer-wrapper">
            <Col xs={6} className="footer__left-column">
              <div className="copyright">
                Copyright <span><i className="far fa-copyright"/></span> 2018 Dezignbox. Powered by Dezignbox.io
              </div>
              <div className="link-static-page"><Link to="/">Quy chế hoạt động</Link></div>
              <div className="link-static-page"><Link to="/">Chính sách bảo mật</Link></div>
              <div className="link-static-page"><Link to="/">Quy định thanh toán</Link></div>
              <div className="link-static-page"><Link to="/">Chính sách bảo hành</Link></div>
              <div className="link-static-page"><Link to="/">Quy trình đặt mua hàng</Link></div>
              <div className="link-static-page"><Link to="/">Chính sách hoạt động</Link></div>
              <div className="bo-cong-thuong">
                <img src="/images/dadangky.png" alt="Da dang ky Bo Cong Thuong"/>
              </div>
            </Col>
            <Col xs={6} className="footer__right-column">
              <div className="social-network-container">
                <span className="social-network-icon">
                  <a href="https://www.facebook.com/Dezignbox-179803586196059"
                     target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"/></a>
                  </span>
                <span className="social-network-icon"><i className="fab fa-twitter"/></span>
                <span className="social-network-icon"><i className="fab fa-instagram"/></span>
                <span className="social-network-icon"><i className="fab fa-pinterest"/></span>
              </div>

              <div className="company-information">
                <p>CÔNG TY TNHH GREEN TECHNOLOGY</p>
                <p>Mã số thuế: 0201747881</p>
                <p>Địa chỉ: Số 265 đường Chợ Hàng, Phường Dư Hàng Kênh, Quận Lê Chân, Thành Phố Hải Phòng, Việt Nam</p>
                <p>Website: dezignbox.io - facebook.com/dezignbox</p>
                <p>Email: info@dezignbox.io - dezignbox.io@gmail.com</p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

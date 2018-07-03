import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Row, Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';

class CheckoutInfo extends Component {

  static propTypes = {
    numberOfItems: PropTypes.number.isRequired,
    fullName: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    city: PropTypes.number.isRequired,
    shippingMethod: PropTypes.number.isRequired,
    paymentMethod: PropTypes.number.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleGoBack: PropTypes.func.isRequired,
    handleFormSubmit: PropTypes.func.isRequired
  };

  onChange = (e) => {
    this.props.handleInputChange(e);
  };

  render() {
    return <Row>
      <Col xs={12}>
        <Form onSubmit={(e) => this.props.handleFormSubmit(e)}>

          <FormGroup>
            <Label for="numberOfItems">How many boxes do you want?</Label>
            <Input
              type="select"
              name="numberOfItems"
              id="numberOfItems"
              value={this.props.numberOfItems}
              onChange={this.onChange}
            >
              <option value={100}>100</option>
              <option value={200}>200</option>
              <option value={500}>500</option>
              <option value={1000}>1000</option>
              <option value={2000}>2000</option>
            </Input>
          </FormGroup>

          <FormGroup>
            <Label for="fullName">Full Name</Label>
            <Input
              type="text"
              name="fullName"
              id="fullName"
              value={this.props.fullName}
              placeholder="Enter your full name"
              onChange={this.onChange}
            />
          </FormGroup>

          <FormGroup>
            <Label for="phone">Phone</Label>
            <Input
              type="text"
              name="phone"
              id="phone"
              value={this.props.phone}
              placeholder="Enter your phone number"
              onChange={this.onChange}
            />
          </FormGroup>

          <FormGroup>
            <Label for="address">Address</Label>
            <Input
              type="textarea"
              name="address"
              id="address"
              value={this.props.address}
              placeholder="Enter your address"
              onChange={this.onChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="city">City</Label>
            <Input
              type="select"
              name="city"
              id="city"
              value={this.props.city}
              onChange={this.onChange}
            >
              <option value={1}>Hà Nội</option>
              <option value={2}>Hải Phòng</option>
            </Input>
          </FormGroup>

          <FormGroup>
            <Label for="shippingMethod">Shipping Method</Label>
            <Input
              type="select"
              name="shippingMethod"
              id="shippingMethod"
              value={this.props.shippingMethod}
              onChange={this.onChange}
            >
              <option value={1}>Giao hàng tận nơi</option>
            </Input>
          </FormGroup>

          <FormGroup>
            <Label for="paymentMethod">Payment Method</Label>
            <Input
              type="select"
              name="paymentMethod"
              id="paymentMethod"
              value={this.props.paymentMethod}
              onChange={this.onChange}
            >
              <option value={1}>Thanh toán khi giao hàng (COD)</option>
            </Input>
          </FormGroup>

          <div className="campaign-detail-buttons-container">
            <Button className="btn button-back dz-button" onClick={this.props.handleGoBack}>Back</Button>
            <Button className="btn button-submit dz-button">Place Order</Button>
          </div>
        </Form>
      </Col>
    </Row>
  }
}

export default CheckoutInfo;

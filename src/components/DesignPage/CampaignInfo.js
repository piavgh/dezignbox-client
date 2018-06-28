import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Row, Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';

class CampaignInfo extends Component {

  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    status: PropTypes.number,
    submitButtonTitle: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleGoBack: PropTypes.func.isRequired,
    handleFormSubmit: PropTypes.func.isRequired
  };

  onChange = (e) => {
    this.props.handleInputChange(e);
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.props.handleFormSubmit();
  };

  render() {
    return <Row>
      <Col xs={12}>
        <Form onSubmit={this.handleFormSubmit}>
          <FormGroup>
            <Label for="title">Title</Label>
            <Input
              type="text"
              name="title"
              id="title"
              value={this.props.title}
              placeholder="Enter campaign title"
              onChange={this.onChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input
              type="textarea"
              name="description"
              id="description"
              value={this.props.description}
              placeholder="Enter your description"
              onChange={this.onChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="status">Status</Label>
            <Input
              type="select"
              name="status"
              id="status"
              value={this.props.status}
              onChange={this.onChange}
            >
              <option value={1}>Active</option>
              <option value={2}>Inactive</option>
            </Input>
          </FormGroup>
          <div className="campaign-detail-buttons-container">
            <Button className="btn button-back dz-button" onClick={this.props.handleGoBack}>Back</Button>
            <Button className="btn button-submit dz-button">{this.props.submitButtonTitle}</Button>
          </div>
        </Form>
      </Col>
    </Row>
  }
}

export default CampaignInfo;

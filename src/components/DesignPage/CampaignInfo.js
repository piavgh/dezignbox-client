import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Row, Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';

class CampaignInfo extends Component {

  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    status: PropTypes.bool,
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
              <option value={true}>Active</option>
              <option value={false}>Inactive</option>
            </Input>
          </FormGroup>
          <div className="campaign-detail-buttons-container">
            <Button className="btn btn-secondary button-back" onClick={this.props.handleGoBack}>Back</Button>
            <Button className="btn btn-success button-submit">{this.props.submitButtonTitle}</Button>
          </div>
        </Form>
      </Col>
    </Row>
  }
}

export default CampaignInfo;

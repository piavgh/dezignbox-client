import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Col, FormGroup, Label, Input} from 'reactstrap';

export default class BoxSizeSelector extends Component {

  static propTypes = {
    onBoxSizeChange: PropTypes.func.isRequired
  };

  render() {
    return (
      <Col xs={{size: 12, offset: 0}} md={{size: 8, offset: 4}} className="box-size-selector">
        <FormGroup row>
          <Label for="status" xs={{size: 3, offset: 3}}>Box Size</Label>
          <Col xs={6}>
            <Input
              type="select"
              name="boxRatio"
              id="boxRatio"
              onChange={this.props.onBoxSizeChange}>
              <option value={1}>20cm x 10cm</option>
              <option value={2}>30cm x 25cm</option>
              <option value={3}>45cm x 30cm</option>
            </Input>
          </Col>
        </FormGroup>
      </Col>
    )
  }
}

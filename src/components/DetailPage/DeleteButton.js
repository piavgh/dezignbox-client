import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

export default class DeleteButton extends Component {

  static propTypes = {
    handleDeleteCampaign: PropTypes.func.isRequired
  };

  render() {
    return (
      <Button
        outline
        block
        color="danger"
        className="delete-button"
        onClick={this.props.handleDeleteCampaign}>
        Delete <span><i className="fas fa-trash"/></span>
      </Button>
    )
  }
}

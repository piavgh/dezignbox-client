import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

export default class DeleteButton extends Component {

  static propTypes = {
    handleClick: PropTypes.func.isRequired
  };

  render() {
    return (
      <Button
        outline
        block
        size="lg"
        color="danger"
        className="delete-button"
        onClick={this.props.handleClick}>
        Delete <span><i className="fas fa-trash"/></span>
      </Button>
    )
  }
}

import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class UserText extends Component {

  static propTypes = {
    text: PropTypes.string
  };

  render() {
    if (this.props.text) {
      return (
        <label className="user-text">{this.props.text}</label>
      );
    }

    return null;
  }

}

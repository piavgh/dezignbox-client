import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Rnd from 'react-rnd';

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'solid 1px #ddd',
};

export default class UserText extends Component {

  static propTypes = {
    text: PropTypes.string
  };

  render() {
    if (this.props.text) {
      return (
        <Rnd
          style={style}
          default={{
            x: 0,
            y: 0,
            width: 620,
            height: 300,
          }}
        >
          <label className="user-text">{this.props.text}</label>
        </Rnd>
      );
    }

    return null;
  }

}

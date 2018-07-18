import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class DesignImage extends Component {

  static propTypes = {
    image: PropTypes.string.isRequired
  };

  render() {
    return (
      <img src={this.props.image}
           alt="user-design"
           className="user-design"
           width={this.props.width}
           height={this.props.height}/>
    );
  }
}

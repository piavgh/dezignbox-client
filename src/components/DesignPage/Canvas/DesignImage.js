import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Rnd from 'react-rnd';

const style = {
  border: 'solid 1px #ddd',
  background: '#f0f0f0',
};

export default class DesignImage extends Component {

  static propTypes = {
    image: PropTypes.string.isRequired
  };

  render() {
    return (
      <Rnd
        style={style}
        default={{
          x: 0,
          y: 0,
          width: this.props.width,
          height: this.props.height,
        }}
      >
        <img src={this.props.image}
             alt="user-design"
             className="user-design"
             width={this.props.width}
             height={this.props.height}
             draggable={false}/>
      </Rnd>
    );
  }
}

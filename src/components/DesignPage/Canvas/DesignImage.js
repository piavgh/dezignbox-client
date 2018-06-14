import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Image} from 'react-konva';

class DesignImage extends Component {
  state = {
    image: null
  };

  static propTypes = {
    image: PropTypes.string.isRequired
  };

  componentDidMount() {
    this.updateImage();
  }

  componentDidUpdate() {
    this.updateImage();
  }

  updateImage() {
    const image = new window.Image();
    image.src = this.props.image;
    image.onload = () => {
      // setState will redraw layer
      // because "image" property is changed
      this.setState({
        image: image
      });
    };
  }

  render() {
    return <Image name="user-design"
                  image={this.state.image}
                  imageSrc={this.state.image}
                  draggable={true}
                  width={this.props.width}
                  height={this.props.height}/>;
  }
}

export default DesignImage;

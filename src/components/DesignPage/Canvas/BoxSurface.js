import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Image} from "react-konva";

class BoxSurface extends Component {

  constructor(props) {
    super(props);
    this.boxSurface = React.createRef();
  }

  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired
  };

  state = {
    image: null
  };

  componentDidMount() {
    const image = new window.Image();
    image.src = this.props.src;
    image.onload = () => {
      // setState will redraw layer
      // because "image" property is changed
      this.setState({
        image: image
      });
    };
  }

  render() {
    return <Image image={this.state.image}
                  ref={this.boxSurface}
                  width={this.props.width}
                  height={this.props.height}/>;
  }
}

export default BoxSurface;

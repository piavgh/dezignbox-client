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
        return <Image image={this.state.image} draggable={true}/>;
    }
}

export default DesignImage;

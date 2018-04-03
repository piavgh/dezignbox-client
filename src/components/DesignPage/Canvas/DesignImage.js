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
        const image = new window.Image();
        image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYTULZCGUVEQJEXt9iB8PU4Kb2FMS9Z6ufR1FnQTdrEl5uBOl52Q';
        image.onload = () => {
            // setState will redraw layer
            // because "image" property is changed
            this.setState({
                image: image
            });
        };
    }

    render() {
        console.log(this.state.image);
        return <Image image={this.state.image} draggable={true}/>;
    }
}

export default DesignImage;

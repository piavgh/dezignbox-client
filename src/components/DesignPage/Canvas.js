import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    Row,
    Col
} from 'reactstrap';
import {Stage, Layer} from 'react-konva';

import Handler from "./Canvas/Handler";
import UserText from "./Canvas/UserText";
import DesignImage from "./Canvas/DesignImage";
import BoxSurface from "./Canvas/BoxSurface";

class Canvas extends Component {

    static propTypes = {
        text: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
    };

    state = {
        stageWidth: 1000,
        stageHeight: 1000
    };

    componentDidMount() {
        this.checkSize();
        // here we should add listener for "container" resize
        // take a look here https://developers.google.com/web/updates/2016/10/resizeobserver
        // for simplicity I will just listen window resize
        window.addEventListener("resize", this.checkSize);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.checkSize);
    }

    checkSize = () => {
        const width = this.container.offsetWidth;
        this.container.style.width = width * 3/4;
        const height = width * 3/4;
        this.setState({
            stageWidth: width,
            stageHeight: height
        });
    };

    render() {
        return <Row>
            <Col xs={12} className="canvas-container">
                <div className="drawing-area" ref={node => {
                    this.container = node;
                }}>
                    <Stage width={this.state.stageWidth} height={this.state.stageHeight}>
                        <Layer>
                            <BoxSurface/>
                            <UserText text={this.props.text}/>
                            <DesignImage image={this.props.image}/>
                            <Handler image={this.props.image}/>
                        </Layer>
                    </Stage>
                </div>
            </Col>
        </Row>;
    }
}

export default Canvas;

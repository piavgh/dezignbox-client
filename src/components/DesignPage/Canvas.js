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

    constructor(props) {
        super(props);
        this.container = React.createRef();
        this.stage = React.createRef();
    }

    static propTypes = {
        text: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
    };

    state = {
        stageWidth: 1000,
        stageHeight: 1000
    };

    componentDidMount() {
        this.props.passStageRefToParent(this.stage);
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
        const width = this.container.current.offsetWidth;
        this.container.current.style.width = width * 0.6;
        const height = width * 0.6;
        this.setState({
            stageWidth: width,
            stageHeight: height
        });
    };

    render() {
        return <Row>
            <Col xs={12} className="canvas-container">
                <div className="drawing-area" ref={this.container}>
                    <Stage ref={this.stage} width={this.state.stageWidth} height={this.state.stageHeight}>
                        <Layer>
                            <BoxSurface/>
                            <UserText text={this.props.text}/>
                            <DesignImage
                                image={this.props.image}
                                width={this.state.stageWidth}
                                height={this.state.stageHeight}
                            />
                            <Handler image={this.props.image}/>
                        </Layer>
                    </Stage>
                </div>
            </Col>
        </Row>;
    }
}

export default Canvas;

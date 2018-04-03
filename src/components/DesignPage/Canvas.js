import React from 'react';
import PropTypes from 'prop-types';
import {
    Row,
    Col
} from 'reactstrap';
import {Stage, Layer} from 'react-konva';

import UserText from "./Canvas/UserText";
import DesignImage from "./Canvas/DesignImage";

const Canvas = props => {
    return <Row>
        <Col xs={12} className={"canvas-container"}>
            <div className={"object-container"}>
                <img className={"object-img"} src={"images/iPhone5A.png"} alt={"iPhone5A"}/>
                <div className="drawing-area">
                    <Stage width={window.innerWidth} height={window.innerHeight}>
                        <Layer>
                            <UserText text={props.text}/>
                            <DesignImage image={props.image}/>
                        </Layer>
                    </Stage>
                </div>
            </div>
        </Col>
    </Row>;
};

Canvas.propTypes = {
    text: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
};

export default Canvas;

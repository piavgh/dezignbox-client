import React, {Component} from 'react';
import {Transformer} from "react-konva";

class Handler extends Component {

    componentDidMount() {
        this.updateTransformer();
    }

    componentDidUpdate() {
        this.updateTransformer();
    }

    updateTransformer() {
        if (this.props.image) {
            const stage = this.transformer.getStage();
            const userDesign = stage.findOne(".user-design");
            this.transformer.attachTo(userDesign);
            this.transformer.getLayer().batchDraw();
        }
    }

    render() {
        if (this.props.image) {
            return (
                <Transformer
                    ref={node => {
                        this.transformer = node;
                    }}
                />
            );
        }

        return null;
    }
}

export default Handler;

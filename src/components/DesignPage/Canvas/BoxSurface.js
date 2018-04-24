import React, {Component} from 'react';
import {Rect} from "react-konva";

class BoxSurface extends Component {

    componentDidMount() {
        const stage = this.boxSurface.getStage();
        this.boxSurface.width(stage.width());
        this.boxSurface.height(stage.height());
    }

    render() {
        return <Rect name="box-surface"
                     x={0}
                     y={0}
                     fill="#D7A572"
                     shadowBlur={5}
                     ref={node => {
                         this.boxSurface = node;
                     }}/>
    }
}

export default BoxSurface;

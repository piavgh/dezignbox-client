import React, {Component} from 'react';
import {Rect} from "react-konva";

class BoxSurface extends Component {

    constructor(props) {
        super(props);
        this.boxSurface = React.createRef();
    }

    componentDidMount() {
        const stage = this.boxSurface.current.getStage();
        this.boxSurface.current.width(stage.width());
        this.boxSurface.current.height(stage.height());
    }

    render() {
        return <Rect name="box-surface"
                     x={0}
                     y={0}
                     fill="#D7A572"
                     shadowBlur={5}
                     ref={this.boxSurface}/>
    }
}

export default BoxSurface;

import React, {Component} from 'react';
import {Transformer} from "react-konva";

class Handler extends Component {

  constructor(props) {
    super(props);
    this.transformer = React.createRef();
  }

  componentDidMount() {
    this.checkNode();
  }

  componentDidUpdate() {
    this.checkNode();
  }

  checkNode() {
    const stage = this.transformer.current.getStage();
    const {selectedShapeName} = this.props;
    const selectedNode = stage.findOne("." + selectedShapeName);

    if (selectedNode === this.transformer.current.node()) {
      return;
    }

    if (selectedNode) {
      this.transformer.current.attachTo(selectedNode);
    } else {
      this.transformer.current.detach();
    }
    this.transformer.current.getLayer().batchDraw();
  }

  render() {
    return (
      <Transformer ref={this.transformer}/>
    );
  }
}

export default Handler;

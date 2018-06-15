import React, {Component} from 'react';
import {Transformer} from "react-konva";

class Handler extends Component {

  constructor(props) {
    super(props);
    this.transformer = React.createRef();
  }

  componentDidMount() {
    this.updateTransformer();
  }

  componentDidUpdate() {
    this.updateTransformer();
  }

  updateTransformer() {
    if (this.props.image) {
      const stage = this.transformer.current.getStage();
      const userDesign = stage.findOne(".user-design");
      this.transformer.current.attachTo(userDesign);
      this.transformer.current.getLayer().batchDraw();
    }
  }

  render() {
    if (this.props.image) {
      return (
        <Transformer ref={this.transformer}/>
      );
    }

    return null;
  }
}

export default Handler;

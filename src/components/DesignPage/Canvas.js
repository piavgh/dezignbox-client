import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';
import {Stage, Layer} from 'react-konva';

import Handler from "./Canvas/Handler";
import UserText from "./Canvas/UserText";
import DesignImage from "./Canvas/DesignImage";
import BoxSurface from "./Canvas/BoxSurface";
import BoxSizeSelector from "./BoxSizeSelector";

export default class Canvas extends Component {

  constructor(props) {
    super(props);
    this.container = React.createRef();
    this.stage = React.createRef();
  }

  /**
   * In case we need to add more sizes for box, just add it here
   * TODO: Move this to a constants file.
   * @type {{"20x10": {width: number, height: number}, "30x25": {width: number, height: number}, "45x30": {width: number, height: number}}}
   */
  boxSize = {
    '20x10': {
      width: 20,
      height: 13.34,
      src: '/images/box-20x10.jpg'
    },
    '30x25': {
      width: 30,
      height: 25,
      src: '/images/box-20x10.jpg'
    },
    '45x30': {
      width: 45,
      height: 34.8,
      src: '/images/box-45x30.jpg'
    }
  };

  state = {
    stageWidth: 1000,
    stageHeight: 1000,
    boxRatio: this.boxSize['20x10'].height / this.boxSize['20x10'].width,
    boxImage: this.boxSize['20x10'].src,
    selectedShapeName: null
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
    const width = this.container.current.offsetWidth;
    const height = width * this.state.boxRatio;
    this.setState({
      stageWidth: width,
      stageHeight: height
    });
  };

  onBoxSizeChange = (e) => {
    switch (parseInt(e.target.value, 10)) {
      case 1:
        this.setState({
          boxRatio: this.boxSize['20x10'].height / this.boxSize['20x10'].width,
          boxImage: this.boxSize['20x10'].src
        }, this.checkSize);
        break;
      case 2:
        this.setState({
          boxRatio: this.boxSize['30x25'].height / this.boxSize['30x25'].width,
          boxImage: this.boxSize['30x25'].src
        }, this.checkSize);
        break;
      case 3:
        this.setState({
          boxRatio: this.boxSize['45x30'].height / this.boxSize['45x30'].width,
          boxImage: this.boxSize['45x30'].src
        }, this.checkSize);
        break;
      default:
        break;
    }
  };

  handleStageClick = e => {
    this.setState({
      selectedShapeName: e.target.name()
    });
  };

  render() {
    let textComponent =
      this.props.text
        ?
        <UserText
          text={this.props.text}/>
        :
        null;

    let imageComponent =
      this.props.image
        ?
        <DesignImage
          image={this.props.image}
          width={this.state.stageWidth * 0.7}
          height={this.state.stageHeight * 0.7}
        />
        :
        null;

    return (
      <Row>
        <BoxSizeSelector
          onBoxSizeChange={this.onBoxSizeChange}/>

        <Col xs={12} className="canvas-container">
          <div className="drawing-area" ref={this.container}>
            <Stage
              ref={this.stage}
              width={this.state.stageWidth}
              height={this.state.stageHeight}
              onClick={this.handleStageClick}>
              <Layer>
                <BoxSurface
                  width={this.state.stageWidth}
                  height={this.state.stageHeight}
                  src={this.state.boxImage}/>
                {textComponent}
                {imageComponent}
                <Handler
                  selectedShapeName={this.state.selectedShapeName}/>
              </Layer>
            </Stage>
          </div>
        </Col>
      </Row>
    );
  }
}

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Row, Col, FormGroup, Label, Input} from 'reactstrap';
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

  /**
   * In case we need to add more sizes for box, just add it here
   * TODO: Move this to a constants file.
   * @type {{"20x10": {width: number, height: number}, "30x25": {width: number, height: number}, "40x30": {width: number, height: number}}}
   */
  boxSize = {
    '20x10': {
      width: 20,
      height: 10
    },
    '30x25': {
      width: 30,
      height: 25
    },
    '40x30': {
      width: 40,
      height: 30
    }
  };

  state = {
    stageWidth: 1000,
    stageHeight: 1000,
    boxRatio: this.boxSize['20x10'].height / this.boxSize['20x10'].width
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
          boxRatio: this.boxSize['20x10'].height / this.boxSize['20x10'].width
        }, this.checkSize);
        break;
      case 2:
        this.setState({
          boxRatio: this.boxSize['30x25'].height / this.boxSize['30x25'].width
        }, this.checkSize);
        break;
      case 3:
        this.setState({
          boxRatio: this.boxSize['40x30'].height / this.boxSize['40x30'].width
        }, this.checkSize);
        break;
      default:
        break;
    }
  };

  render() {
    return <Row>
      <Col xs={{size: 12, offset: 0}} md={{size: 8, offset: 4}} className="box-size-selector">
        <FormGroup row>
          <Label for="status" xs={{size: 3, offset: 3}}>Box Size</Label>
          <Col xs={6}>
            <Input
              type="select"
              name="boxRatio"
              id="boxRatio"
              value={this.state.boxSize}
              onChange={this.onBoxSizeChange}>
              <option value={1}>20cm x 10cm</option>
              <option value={2}>30cm x 25cm</option>
              <option value={3}>40cm x 30cm</option>
            </Input>
          </Col>
        </FormGroup>
      </Col>
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

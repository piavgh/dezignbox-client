import React, {Component} from 'react';
import {
    Row,
    Col
} from 'reactstrap';

import Tools from "../components/DesignPage/Tools";
import Canvas from "../components/DesignPage/Canvas";
import Styles from "../components/DesignPage/Styles";

class DesignPage extends Component {

    state = {
        text: '',
        image: '',
        files: []
    };

    static propTypes = {};

    handleTextChange = e => {
        this.setState({text: e.target.value});
    };

    handleFileDrop = files => {
        this.setState({
            files,
            image: files[0].preview
        });
    };

    render() {
        return <div>
            <Row>
                <Col xs={12}>

                </Col>
            </Row>
            <Row>
                <Col xs={12} lg={3}>
                    <Tools
                        files={this.state.files}
                        onTextChange={this.handleTextChange}
                        onFileDrop={this.handleFileDrop}/>
                </Col>
                <Col xs={12} lg={6}>
                    <Canvas
                        text={this.state.text}
                        image={this.state.image}/>
                </Col>
                <Col xs={12} lg={3}>
                    <Styles/>
                </Col>
            </Row>
        </div>
    }
}

export default DesignPage;

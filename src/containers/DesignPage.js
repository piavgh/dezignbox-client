import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    Row,
    Col
} from 'reactstrap';

import Tools from "../components/DesignPage/Tools";
import Canvas from "../components/DesignPage/Canvas";
import Styles from "../components/DesignPage/Styles";

class DesignPage extends Component {

    render() {
        return <Row>
            <Col xs={12} md={4}>
                <Tools/>
            </Col>
            <Col xs={12} md={5}>
                <Canvas/>
            </Col>
            <Col xs={12} md={3}>
                <Styles/>
            </Col>
        </Row>;
    }
}

DesignPage.propTypes = {};

export default DesignPage;

import React from 'react';
import {
    Row,
    Col
} from 'reactstrap';

const Styles = props => {
    return <Row>
        <Col xs={12}>
            <button>Buy this</button>
        </Col>
    </Row>;
};

Styles.propTypes = {};

export default Styles;

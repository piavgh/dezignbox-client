import React from 'react';
import PropTypes from 'prop-types';
import {
    Row,
    Col
} from 'reactstrap';

const Alert = ({alert}) => {
    return <Row>
        <Col xs={12}>
            {alert.message && <div className={`alert ${alert.type}`}>{alert.message}</div>}
        </Col>
    </Row>
};

Alert.propTypes = {
    alert: PropTypes.object.isRequired
};

export default Alert;

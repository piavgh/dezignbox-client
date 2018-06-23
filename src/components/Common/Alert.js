import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col
} from 'reactstrap';

const Alert = ({alert}) => {
  if (alert.message) {
    return <Row>
      <Col xs={12}>
        {alert.message && <div className={`alert ${alert.type}`}>{alert.message}</div>}
      </Col>
    </Row>
  }

  // If there is no alert message, hide the Alert div
  return null;
};

Alert.propTypes = {
  alert: PropTypes.object.isRequired
};

export default Alert;

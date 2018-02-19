import React from 'react';
import PropTypes from 'prop-types';
import {
    Row,
    Col
} from 'reactstrap';

import LoginForm from "./LoginForm";

const Login = props =>
    <Row>
        <Col xs={12} md={8}>

        </Col>
        <Col xs={12} md={4}>
            <LoginForm
                loginAction={props.loginAction}
                isLoginPending={props.isLoginPending}
                isLoginSuccess={props.isLoginSuccess}
                isLoginError={props.isLoginError}
            />
        </Col>
    </Row>;

Login.propTypes = {
    loginAction: PropTypes.func.isRequired,
    isLoginPending: PropTypes.bool.isRequired,
    isLoginSuccess: PropTypes.bool.isRequired,
    isLoginError: PropTypes.bool.isRequired
};

export default Login;

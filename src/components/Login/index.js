import React from 'react';
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
            <LoginForm/>
        </Col>
    </Row>;

export default Login;

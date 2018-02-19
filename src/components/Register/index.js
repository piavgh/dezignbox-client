import React from 'react';
import {
    Row,
    Col
} from 'reactstrap';

import RegisterForm from "./RegisterForm";

const Register = props =>
    <Row>
        <Col xs={12} md={8}>

        </Col>
        <Col xs={12} md={4}>
            <RegisterForm/>
        </Col>
    </Row>;

export default Register;

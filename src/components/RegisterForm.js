import React, {Component} from 'react';
import {
    Form,
    Label
} from 'reactstrap';
import PropTypes from "prop-types";

class RegisterForm extends Component {
    static propTypes = {
        handleRegisterSubmit: PropTypes.func.isRequired,
        isRegisterPending: PropTypes.bool.isRequired,
        isRegisterSuccess: PropTypes.bool.isRequired,
        isRegisterError: PropTypes.object.isRequired,
    };

    state = {
        email: '',
        password: '',
        rePassword: ''
    };

    render() {
        return (
            <Form className="form-register" role="form" onSubmit={(e) => {
                e.preventDefault();
                this.props.handleRegisterSubmit(this.state.email, this.state.password);
            }}>
                <h1>Register</h1>
                <Label for="inputEmail" className="sr-only">Email address</Label>
                <input type="email"
                       id="inputEmail"
                       className="form-control"
                       name="email"
                       placeholder="Email"
                       required
                       autoFocus
                       onChange={(e) => {
                           this.setState({email: e.target.value});
                       }}
                />
                <Label for="inputPassword" className="sr-only">Password</Label>
                <input type="password"
                       id="inputPassword"
                       className="form-control"
                       name="password"
                       placeholder="Password"
                       required
                       onChange={(e) => {
                           this.setState({password: e.target.value});
                       }}
                />
                <Label for="inputRePassword" className="sr-only">Re-Password</Label>
                <input type="password"
                       id="inputRePassword"
                       className="form-control"
                       name="rePassword"
                       placeholder="Re-Password"
                       required
                       onChange={(e) => {
                           this.setState({rePassword: e.target.value});
                       }}
                />
                <button className="btn btn-lg btn-block" type="submit">Register</button>
            </Form>
        );
    }
}

export default RegisterForm;

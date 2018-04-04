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

    handleInputChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0 && this.state.password === this.state.rePassword;
    }

    render() {
        return (
            <Form className="form-register" role="form" onSubmit={(e) => {
                e.preventDefault();
                this.props.handleRegisterSubmit(this.state.email, this.state.password);
            }}>
                <h1>Register</h1>
                <Label for="email" className="sr-only">Email address</Label>
                <input type="email"
                       id="email"
                       className="form-control"
                       name="email"
                       placeholder="Email"
                       required
                       autoFocus
                       onChange={this.handleInputChange}
                />
                <Label for="password" className="sr-only">Password</Label>
                <input type="password"
                       id="password"
                       className="form-control"
                       name="password"
                       placeholder="Password"
                       required
                       onChange={this.handleInputChange}
                />
                <Label for="rePassword" className="sr-only">Re-Password</Label>
                <input type="password"
                       id="rePassword"
                       className="form-control"
                       name="rePassword"
                       placeholder="Re-Password"
                       required
                       onChange={this.handleInputChange}
                />
                <button className="btn btn-lg btn-block"
                        type="submit"
                        disabled={!this.validateForm()}>Register</button>
            </Form>
        );
    }
}

export default RegisterForm;

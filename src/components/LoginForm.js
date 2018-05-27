import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    Form,
    Label
} from 'reactstrap';

import LoaderButton from './LoaderButton';

class LoginForm extends Component {
    static propTypes = {
        handleLoginSubmit: PropTypes.func.isRequired,
        isLoginPending: PropTypes.bool.isRequired,
        isAuthenticated: PropTypes.bool.isRequired,
        loginError: PropTypes.object.isRequired,
        currentUser: PropTypes.object
    };

    state = {
        email: '',
        password: '',
        rememberMe: false
    };

    handleInputChange = event => {
        if (event.target.id === 'rememberMe') {
            this.setState({
                [event.target.id]: !this.state.rememberMe
            });
        } else {
            this.setState({
                [event.target.id]: event.target.value
            });
        }
    };

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    render() {
        return (
            <Form className="form-signin" role="form" onSubmit={(e) => {
                e.preventDefault();
                this.props.handleLoginSubmit(this.state.email, this.state.password);
            }}>
                <h1>Login</h1>
                <Label for="email" className="sr-only">Email address</Label>
                <input type="email" id="email" className="form-control" name="email"
                       placeholder="Email"
                       required
                       autoFocus
                       value={this.state.email}
                       onChange={this.handleInputChange}
                />
                <Label for="password" className="sr-only">Password</Label>
                <input type="password"
                       id="password"
                       className="form-control"
                       name="password"
                       placeholder="Password"
                       required
                       value={this.state.password}
                       onChange={this.handleInputChange}
                />
                <div className="checkbox mb-3">
                    <Label>
                        <input type="checkbox"
                               id={"rememberMe"}
                               value={this.state.rememberMe}
                               onChange={this.handleInputChange}
                        /> Remember Me
                    </Label>
                </div>
                <LoaderButton
                    block
                    className="btn-success"
                    disabled={!this.validateForm()}
                    isLoading={this.props.isLoginPending}
                    text="Login"
                    loadingText="Logging in…"
                />
            </Form>
        );
    }
}

export default LoginForm;

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    Form,
    Label
} from 'reactstrap';

class LoginForm extends Component {
    static propTypes = {
        handleLoginSubmit: PropTypes.func.isRequired,
        isLoginPending: PropTypes.bool.isRequired,
        isLoginSuccess: PropTypes.bool.isRequired,
        isLoginError: PropTypes.bool.isRequired
    };

    state = {
        email: '',
        password: '',
        rememberMe: false
    };

    render() {
        return (
            <Form className="form-signin" role="form" onSubmit={(e) => {
                e.preventDefault();
                this.props.handleLoginSubmit(this.state.email, this.state.password);
            }}>
                <h1>Login</h1>
                <Label for="inputEmail" className="sr-only">Email address</Label>
                <input type="email" id="inputEmail" className="form-control" name="email"
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
                <div className="checkbox mb-3">
                    <Label>
                        <input type="checkbox"
                               value="remember-me"
                               onChange={(e) => {
                                   this.setState({rememberMe: !this.state.rememberMe});
                               }}
                        /> Remember Me
                    </Label>
                </div>
                <button className="btn btn-lg btn-block" type="submit">Login</button>
                <div className="message">
                    {this.props.isLoginPending && <div>Please wait...</div>}
                    {this.props.isLoginSuccess && <div>Success.</div>}
                    {this.props.isLoginError && <div>{this.props.isLoginError.message}</div>}
                </div>
            </Form>
        );
    }
}

export default LoginForm;

import React, {Component} from 'react';
import {
    Form,
    Label
} from 'reactstrap';

class RegisterForm extends Component {
    render() {
        return (
            <Form className="form-signin" role="form" action="/login" method="post">
                <h1>Register</h1>
                <Label for="inputEmail" className="sr-only">Email address</Label>
                <input type="email" id="inputEmail" className="form-control" name="email"
                       placeholder="Email"
                       required
                       autoFocus/>
                <Label for="inputPassword" className="sr-only">Password</Label>
                <input type="password" id="inputPassword" className="form-control" name="password"
                       placeholder="Password"
                       required/>
                <button className="btn btn-lg btn-block" type="submit">Login</button>
            </Form>
        );
    }
}

export default RegisterForm;

import React, {Component} from 'react';
import {
    Form,
    Input,
    Label,
    Button
} from 'reactstrap';

class Login extends Component {
    render() {
        return (
            <Form className="form-signin" role="form" action="/login" method="post">
                <h1>Login</h1>
                <Label for="inputEmail" className="sr-only">Email address</Label>
                <Input type="email" id="inputEmail" className="form-control" name="email"
                       placeholder="Email"
                       required
                       autoFocus/>
                <Label for="inputPassword" className="sr-only">Password</Label>
                <Input type="password" id="inputPassword" className="form-control" name="password"
                       placeholder="Password"
                       required/>
                <div className="checkbox mb-3">
                    <Label>
                        <Input type="checkbox" value="remember-me"/> Remember Me
                    </Label>
                </div>
                <Button className="btn btn-lg btn-block" type="submit">Login</Button>
            </Form>
        );
    }
}

export default Login;

import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import './App.css';
import Home from '../components/Home';
import Header from '../components/Header';
import Login from '../components/Login';
import Register from '../components/Register';
import AboutUs from "../components/AboutUs";
import Design from "../components/Design";
import Products from "../components/Products";
import NotFound from '../components/NotFound';
import * as AuthActionCreators from '../actions/auth.actions';

class App extends Component {
    render() {

        const {dispatch, isLoggingIn, isLoggedIn, currentUser} = this.props;
        const loginRequest = bindActionCreators(AuthActionCreators.loginRequest, dispatch);
        const loginSuccess = bindActionCreators(AuthActionCreators.loginSuccess, dispatch);
        const loginFailure = bindActionCreators(AuthActionCreators.loginFailure, dispatch);

        return (
            <BrowserRouter>
                <div>
                    <Header isLoggedIn={isLoggedIn} currentUser={currentUser}/>
                    <div className="container">
                        <Switch>
                            <Route exact path={"/"} component={Home}/>
                            <Route path={"/login"} component={Login} loginRequest={loginRequest}/>
                            <Route path={"/register"} component={Register}/>
                            <Route path={"/aboutUs"} component={AboutUs}/>
                            <Route path={"/start-design"} component={Design}/>
                            <Route path={"/products"} component={Products}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = state => (
    {
        isLoggingIn: state.isLoggingIn,
        isLoggedIn: state.isLoggedIn,
        currentUser: state.currentUser
    }
);

export default connect(mapStateToProps)(App);

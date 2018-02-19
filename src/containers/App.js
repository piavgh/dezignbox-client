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

    loginAction = (email, password) => {
        console.log("5555");
        console.log(email + password);
    };

    render() {

        const {dispatch, isLoginPending, isLoginSuccess, isLoginError, currentUser} = this.props;
        const setLoginAction = bindActionCreators(this.loginAction);
        const setLoginPending = bindActionCreators(AuthActionCreators.setLoginPending, dispatch);
        const setLoginSuccess = bindActionCreators(AuthActionCreators.setLoginSuccess, dispatch);
        const setLoginError = bindActionCreators(AuthActionCreators.setLoginError, dispatch);

        return (
            <BrowserRouter>
                <div>
                    <Header/>
                    <div className="container">
                        <Switch>
                            <Route exact path={"/"} component={Home}/>
                            <Route path={"/login"} render={
                                () => <Login
                                    loginAction={this.loginAction}
                                    isLoginPending={isLoginPending}
                                    isLoginSuccess={isLoginSuccess}
                                    isLoginError={isLoginError}
                                />
                            }/>
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
        isLoginPending: state.isLoginPending,
        isLoginSuccess: state.isLoginSuccess,
        isLoginError: state.isLoginError,
        currentUser: state.currentUser
    }
);

const mapDispatchToProps = (dispatch) => {
    return {
        login: (email, password) => dispatch(AuthActionCreators.login(email, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

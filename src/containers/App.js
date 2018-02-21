import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import './App.css';
import Home from '../components/Home';
import Header from '../components/Header/index';
import Login from '../components/Login';
import Register from '../components/Register';
import AboutUs from "../components/AboutUs";
import Design from "../components/Design";
import Products from "../components/Products";
import NotFound from '../components/NotFound';
import * as AuthActionCreators from '../actions/auth.actions';
import AuthService from '../services/auth.services';

class App extends Component {

    render() {

        const {isLoginPending, isLoginSuccess, isLoginError, currentUser} = this.props;

        const handleLoginSubmit = (email, password) => {
            this.props.boundSetLoginPending(true);

            AuthService.login(email, password, (error, currentUser = null) => {
                this.props.boundSetLoginPending(false);
                if (!error) {
                    this.props.boundSetLoginSuccess(true);
                    this.props.boundSetCurrentUser(currentUser);
                } else {
                    this.props.boundSetLoginError(true);
                }
            });
        };

        return (
            <BrowserRouter>
                <div>
                    <Header currentUser={currentUser}/>
                    <div className="container">
                        <Switch>
                            <Route exact path={"/"} component={Home}/>
                            <Route path={"/login"} render={
                                () => <Login
                                    handleLoginSubmit={handleLoginSubmit}
                                    isLoginPending={isLoginPending}
                                    isLoginSuccess={isLoginSuccess}
                                    isLoginError={isLoginError}
                                    currentUser={currentUser}
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

const mapDispatchToProps = dispatch => (
    {
        boundSetLoginPending: bindActionCreators(AuthActionCreators.setLoginPending, dispatch),
        boundSetLoginSuccess: bindActionCreators(AuthActionCreators.setLoginSuccess, dispatch),
        boundSetLoginError: bindActionCreators(AuthActionCreators.setLoginError, dispatch),
        boundSetCurrentUser: bindActionCreators(AuthActionCreators.setCurrentUser, dispatch)
    }
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

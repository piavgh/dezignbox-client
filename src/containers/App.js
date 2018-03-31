import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './App.css';
import Home from '../components/Home';
import Header from './Header';
import LoginPage from './LoginPage';
import RegisterPage from './RegsisterPage';
import AboutUs from "../components/AboutUs";
import DesignPage from "./DesignPage";
import Products from "../components/Products";
import NotFound from '../components/NotFound';
import {connect} from "react-redux";
import Alert from "../components/Alert";

class App extends Component {

    render() {
        const {alert} = this.props;

        return (
            <BrowserRouter>
                <div>
                    <Header/>
                    <div className="container">
                        <Alert alert={alert}/>
                        <Switch>
                            <Route exact path={"/"} component={Home}/>
                            <Route path={"/login"} component={LoginPage}/>
                            <Route path={"/register"} component={RegisterPage}/>
                            <Route path={"/aboutUs"} component={AboutUs}/>
                            <Route path={"/start-design"} component={DesignPage}/>
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
        alert: state.alert,
    }
);

export default connect(
    mapStateToProps
)(App);

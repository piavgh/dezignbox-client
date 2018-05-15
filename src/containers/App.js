import React, {Component} from 'react';
import {bindActionCreators} from "redux";

import './App.css';
import Header from './Header';
import {connect} from "react-redux";
import Alert from "../components/Alert";
import Routes from "./Routes";
import * as AuthActionCreators from "../actions/auth.actions";
import * as AlertActionCreators from '../actions/alert.actions';

class App extends Component {

    componentWillMount() {
        this.props.boundLoadUserFromToken();
        this.unlisten = this.props.history.listen((location, action) => {
            console.log("on route change");
            this.props.boundClearAlert();
        });
    }

    componentWillUnmount() {
        this.unlisten();
    }

    render() {
        const {alert} = this.props;

        return (
            <div>
                <Header/>
                <div className="container">
                    <Alert alert={alert}/>
                    <Routes/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => (
    {
        alert: state.alert,
    }
);

const mapDispatchToProps = dispatch => (
    {
        boundLoadUserFromToken: bindActionCreators(AuthActionCreators.loadUserFromToken, dispatch),
        boundClearAlert: bindActionCreators(AlertActionCreators.clearAlert, dispatch)
    }
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

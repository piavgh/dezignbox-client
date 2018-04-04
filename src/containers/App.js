import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';

import './App.css';
import Header from './Header';
import {connect} from "react-redux";
import Alert from "../components/Alert";
import Routes from "./Routes";

class App extends Component {

    render() {
        const {alert} = this.props;

        return (
            <BrowserRouter>
                <div>
                    <Header/>
                    <div className="container">
                        <Alert alert={alert}/>
                        <Routes />
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

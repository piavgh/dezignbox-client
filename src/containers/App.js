import React, {Component} from 'react';
import {bindActionCreators} from "redux";

import '../css/App.css';
import Header from './Header';
import {connect} from "react-redux";
import Alert from "../components/Alert";
import Routes from "./Routes";
import * as AuthActionCreators from "../redux/actions/auth.actions";
import * as AlertActionCreators from '../redux/actions/alert.actions';
import Footer from "./Footer";

class App extends Component {

  componentDidMount() {
    if (!this.props.isAuthenticated) {
      this.props.boundLoadUserFromToken();
    }
    this.unlisten = this.props.history.listen((location, action) => {
      // Check if "alert" object is empty, if not, clear the "alert" object
      if (!(Object.keys(this.props.alert).length === 0 && this.props.alert.constructor === Object)) {
        this.props.boundClearAlert();
      }
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }

  render() {
    const childProps = {
      isAuthenticated: this.props.isAuthenticated
    };
    const {alert} = this.props;

    return (
      <div className="App">
        <Header/>
        <div className="container main">
          <Alert alert={alert}/>
          <Routes childProps={childProps}/>
        </div>
        <Footer/>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    alert: state.alert,
    isAuthenticated: state.auth.isAuthenticated
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

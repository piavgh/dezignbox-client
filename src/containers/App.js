import React, {Component} from 'react';
import {bindActionCreators} from "redux";

import './App.css';
import Header from './Header';
import {connect} from "react-redux";
import Alert from "../components/Common/Alert";
import Routes from "./Routes";
import {loadUserFromToken} from "../redux/actions/auth.actions";
import {clearAlert} from '../redux/actions/alert.actions';
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
      isAuthenticated: this.props.isAuthenticated,
      isAdmin: this.props.isAdmin
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
    alert: state.alertReducer,
    isAuthenticated: state.authReducer.isAuthenticated,
    isAdmin: state.authReducer.currentUser && state.authReducer.currentUser.isAdmin
  }
);

const mapDispatchToProps = dispatch => (
  {
    boundLoadUserFromToken: bindActionCreators(loadUserFromToken, dispatch),
    boundClearAlert: bindActionCreators(clearAlert, dispatch)
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

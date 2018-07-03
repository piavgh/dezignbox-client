import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col
} from 'reactstrap';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import LoginForm from "../components/LoginPage/LoginForm";
import {loginAction} from "../redux/actions/auth.actions";
import {setAlertSuccess, setAlertError} from '../redux/actions/alert.actions';

class LoginPage extends Component {
  handleLoginSubmit = (email, password) => {
    this.props.loginAction(email, password)
      .then((data) => {
        this.props.history.push('/');
        this.props.setAlertSuccess(`Welcome back ${data.currentUser.email}`)
      }, (err) => {
        this.props.setAlertError(err);
      });
  };

  render() {
    const {isLoginPending, isAuthenticated, loginError, currentUser} = this.props;

    return <Row>
      <Col xs={12} md={8}>

      </Col>
      <Col xs={12} md={4}>
        <LoginForm
          handleLoginSubmit={this.handleLoginSubmit}
          isLoginPending={isLoginPending}
          isAuthenticated={isAuthenticated}
          loginError={loginError}
          currentUser={currentUser}
        />
      </Col>
    </Row>;
  }

}

LoginPage.propTypes = {
  isLoginPending: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  loginError: PropTypes.object.isRequired
};

const mapStateToProps = state => (
  {
    isLoginPending: state.authReducer.isLoginPending,
    isAuthenticated: state.authReducer.isAuthenticated,
    loginError: state.authReducer.loginError,
    currentUser: state.authReducer.currentUser
  }
);

const mapDispatchToProps = dispatch => (
  {
    loginAction: bindActionCreators(loginAction, dispatch),
    setAlertSuccess: bindActionCreators(setAlertSuccess, dispatch),
    setAlertError: bindActionCreators(setAlertError, dispatch),
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);


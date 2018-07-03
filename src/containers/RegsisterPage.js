import React, {Component} from 'react';
import PropTypes from "prop-types";
import {
  Row,
  Col
} from 'reactstrap';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import RegisterForm from "../components/RegisterPage/RegisterForm";
import {registerAction} from "../redux/actions/auth.actions";
import {setAlertSuccess, setAlertError} from '../redux/actions/alert.actions';

class RegisterPage extends Component {
  handleRegisterSubmit = (email, password) => {
    this.props.registerAction(email, password)
      .then((data) => {
        this.props.history.push('/login');
        this.props.setAlertSuccess(data);
      }, (err) => {
        this.props.setAlertError(err.error.message);
      });
  };

  render() {
    const {isRegisterPending, isRegisterSuccess, isRegisterError} = this.props;

    return <Row>
      <Col xs={12} md={8}>

      </Col>
      <Col xs={12} md={4}>
        <RegisterForm handleRegisterSubmit={this.handleRegisterSubmit}
                      isRegisterPending={isRegisterPending}
                      isRegisterSuccess={isRegisterSuccess}
                      isRegisterError={isRegisterError}
        />
      </Col>
    </Row>;
  }
}

RegisterPage.propTypes = {
  isRegisterPending: PropTypes.bool.isRequired,
  isRegisterSuccess: PropTypes.bool.isRequired,
  isRegisterError: PropTypes.object.isRequired
};

const mapStateToProps = state => (
  {
    isRegisterPending: state.authReducer.isRegisterPending,
    isRegisterSuccess: state.authReducer.isRegisterSuccess,
    isRegisterError: state.authReducer.isRegisterError
  }
);

const mapDispatchToProps = dispatch => (
  {
    registerAction: bindActionCreators(registerAction, dispatch),
    setAlertSuccess: bindActionCreators(setAlertSuccess, dispatch),
    setAlertError: bindActionCreators(setAlertError, dispatch),
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterPage);


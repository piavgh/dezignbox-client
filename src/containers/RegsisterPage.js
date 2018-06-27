import React, {Component} from 'react';
import PropTypes from "prop-types";
import {
  Row,
  Col
} from 'reactstrap';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Redirect} from 'react-router-dom';

import RegisterForm from "../components/RegisterPage/RegisterForm";
import {registerAction} from "../redux/actions/auth.actions";

class RegisterPage extends Component {
  handleRegisterSubmit = (email, password) => {
    this.props.boundRegisterAction(email, password);
  };

  render() {
    const {isRegisterPending, isRegisterSuccess, isRegisterError} = this.props;

    if (isRegisterSuccess) {
      return <Redirect to='/login'/>
    }

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
    boundRegisterAction: bindActionCreators(registerAction, dispatch)
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterPage);


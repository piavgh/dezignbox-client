import React, {Component} from 'react';
import PropTypes from "prop-types";
import {
    Row,
    Col
} from 'reactstrap';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Redirect} from 'react-router-dom';

import RegisterForm from "../components/RegisterForm";
import AuthService from "../services/auth.services";
import * as AuthActionCreators from "../actions/auth.actions";
import {AlertActionCreators} from "../actions/alert.actions";

class RegisterPage extends Component {
    handleRegisterSubmit = (email, password) => {
        this.props.boundSetRegisterPending(true);

        AuthService.register(email, password, (error) => {
            this.props.boundSetRegisterPending(false);
            if (!error) {
                this.props.boundSetRegisterSuccess(true);
                this.props.boundSetAlertSuccess(`You've successfully registered!`);
            } else {
                this.props.boundSetRegisterError({message: error});
                this.props.boundSetAlertError(error);
            }
        });
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
        isRegisterPending: state.auth.isRegisterPending,
        isRegisterSuccess: state.auth.isRegisterSuccess,
        isRegisterError: state.auth.isRegisterError,
        alert: state.alert.alert
    }
);

const mapDispatchToProps = dispatch => (
    {
        boundSetRegisterPending: bindActionCreators(AuthActionCreators.setRegisterPending, dispatch),
        boundSetRegisterSuccess: bindActionCreators(AuthActionCreators.setRegisterSuccess, dispatch),
        boundSetRegisterError: bindActionCreators(AuthActionCreators.setRegisterError, dispatch),
        boundSetAlertSuccess: bindActionCreators(AlertActionCreators.setAlertSuccess, dispatch),
        boundSetAlertError: bindActionCreators(AlertActionCreators.setAlertError, dispatch),
        boundClearAlert: bindActionCreators(AlertActionCreators.clearAlert, dispatch)
    }
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterPage);


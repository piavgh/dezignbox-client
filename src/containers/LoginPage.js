import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    Row,
    Col
} from 'reactstrap';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import LoginForm from "../components/LoginForm";
import AuthService from "../services/auth.services";
import * as AuthActionCreators from "../actions/auth.actions";
import {AlertActionCreators} from '../actions/alert.actions';
import Auth from '../helpers/auth';

class LoginPage extends Component {
    handleLoginSubmit = (email, password) => {
        this.props.boundSetLoginPending(true);

        AuthService.login(email, password, (error, data) => {
            this.props.boundSetLoginPending(false);
            if (!error) {
                this.props.boundSetLoginSuccess(true);
                this.props.boundSetCurrentUser(data.currentUser);
                Auth.authenticateUser(data.token);
                this.props.boundSetAlertSuccess(`Welcome back ${data.currentUser.email}`);
            } else {
                this.props.boundSetLoginError({message: error});
                this.props.boundSetAlertError(error);
            }
        });
    };

    render() {
        const {isLoginPending, isLoginSuccess, isLoginError, currentUser} = this.props;

        if (isLoginSuccess) {
            return <Redirect to='/'/>
        }

        return <Row>
            <Col xs={12} md={8}>

            </Col>
            <Col xs={12} md={4}>
                <LoginForm
                    handleLoginSubmit={this.handleLoginSubmit}
                    isLoginPending={isLoginPending}
                    isLoginSuccess={isLoginSuccess}
                    isLoginError={isLoginError}
                    currentUser={currentUser}
                />
            </Col>
        </Row>;
    }

}

LoginPage.propTypes = {
    isLoginPending: PropTypes.bool.isRequired,
    isLoginSuccess: PropTypes.bool.isRequired,
    isLoginError: PropTypes.object.isRequired
};

const mapStateToProps = state => (
    {
        isLoginPending: state.auth.isLoginPending,
        isLoginSuccess: state.auth.isLoginSuccess,
        isLoginError: state.auth.isLoginError,
        currentUser: state.auth.currentUser,
        alert: state.alert
    }
);

const mapDispatchToProps = dispatch => (
    {
        boundSetLoginPending: bindActionCreators(AuthActionCreators.setLoginPending, dispatch),
        boundSetLoginSuccess: bindActionCreators(AuthActionCreators.setLoginSuccess, dispatch),
        boundSetLoginError: bindActionCreators(AuthActionCreators.setLoginError, dispatch),
        boundSetCurrentUser: bindActionCreators(AuthActionCreators.setCurrentUser, dispatch),
        boundSetAlertSuccess: bindActionCreators(AlertActionCreators.setAlertSuccess, dispatch),
        boundSetAlertError: bindActionCreators(AlertActionCreators.setAlertError, dispatch),
        boundClearAlert: bindActionCreators(AlertActionCreators.clearAlert, dispatch)
    }
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginPage);


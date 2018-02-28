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

class LoginPage extends Component {
    handleLoginSubmit = (email, password) => {
        this.props.boundSetLoginPending(true);

        AuthService.login(email, password, (error, currentUser = null) => {
            this.props.boundSetLoginPending(false);
            if (!error) {
                this.props.boundSetLoginSuccess(true);
                this.props.boundSetCurrentUser(currentUser);
                try {
                    this.props.history.push("/");
                } catch (err) {
                    console.log(err);
                }
            } else {
                this.props.boundSetLoginError({message: error});
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
        isLoginPending: state.isLoginPending,
        isLoginSuccess: state.isLoginSuccess,
        isLoginError: state.isLoginError,
        currentUser: state.currentUser
    }
);

const mapDispatchToProps = dispatch => (
    {
        boundSetLoginPending: bindActionCreators(AuthActionCreators.setLoginPending, dispatch),
        boundSetLoginSuccess: bindActionCreators(AuthActionCreators.setLoginSuccess, dispatch),
        boundSetLoginError: bindActionCreators(AuthActionCreators.setLoginError, dispatch),
        boundSetCurrentUser: bindActionCreators(AuthActionCreators.setCurrentUser, dispatch)
    }
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginPage);


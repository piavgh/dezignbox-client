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
import * as AuthActionCreators from "../actions/auth.actions";

class LoginPage extends Component {
    handleLoginSubmit = (email, password) => {
        this.props.boundLoginAction(email, password);
    };

    render() {
        const {isLoginPending, isAuthenticated, loginError, currentUser} = this.props;

        if (isAuthenticated) {
            return <Redirect to='/'/>
        }

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
        isLoginPending: state.auth.isLoginPending,
        isAuthenticated: state.auth.isAuthenticated,
        loginError: state.auth.loginError,
        currentUser: state.auth.currentUser,
        alert: state.alert
    }
);

const mapDispatchToProps = dispatch => (
    {
        boundLoginAction: bindActionCreators(AuthActionCreators.loginAction, dispatch),
    }
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginPage);


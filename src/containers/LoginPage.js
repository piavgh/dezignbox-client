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
        this.props.boundLogin(email, password);
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
        boundLogin: bindActionCreators(AuthActionCreators.login, dispatch),
    }
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginPage);


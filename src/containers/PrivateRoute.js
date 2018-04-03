import React from 'react';
import {Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

const PrivateRoute = ({component: Component, isLoginSuccess, ...rest}) => {
    return <Route
        {...rest}
        render={
            props => {
                return isLoginSuccess ?
                    (
                        <Component {...props} />
                    )
                    :
                    (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: {from: props.location}
                            }}
                        />
                    )
            }
        }
    />
};

const mapStateToProps = state => (
    {
        isLoginSuccess: state.auth.isLoginSuccess
    }
);

export default withRouter(connect(
    mapStateToProps, null, null, {pure: false}
)(PrivateRoute));

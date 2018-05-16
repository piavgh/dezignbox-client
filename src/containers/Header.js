import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import {Link, NavLink as RRNavLink} from 'react-router-dom';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as AuthActionCreators from "../actions/auth.actions";
import Auth from "../helpers/auth";

class Header extends Component {
    static propTypes = {
        currentUser: PropTypes.object
    };

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    logOut = () => {
        this.props.boundLogout();
    };

    renderRightMenu() {
        if (Auth.isUserAuthenticated() && this.props.currentUser) {
            return <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink to="/start-design/design" tag={RRNavLink}>Start Designing</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        {this.props.currentUser.email}
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>
                            <Link to="/products">Products</Link>
                        </DropdownItem>
                        <DropdownItem divider/>
                        <DropdownItem>
                            <a onClick={this.logOut}>Log Out</a>
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </Nav>
        } else {
            return <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink to="/start-design" tag={RRNavLink}>Start Designing</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/aboutUs" tag={RRNavLink}>About Us</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/register" tag={RRNavLink}>Register</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/login" tag={RRNavLink}>Log In</NavLink>
                </NavItem>
            </Nav>
        }
    }

    render() {
        return (
            <Navbar color="faded" light expand="md">
                <Link className={"navbar-brand"} to={"/"}><img src={"/images/dezignbox_logo.png"} alt={"Dezignbox Logo"}/></Link>
                <NavbarToggler onClick={this.toggle}/>
                <Collapse isOpen={this.state.isOpen} navbar>
                    {this.renderRightMenu()}
                </Collapse>
            </Navbar>
        );
    }
}

const mapStateToProps = state => (
    {
        isLoginPending: state.auth.isLoginPending,
        isAuthenticated: state.auth.isAuthenticated,
        loginError: state.auth.loginError,
        currentUser: state.auth.currentUser
    }
);

const mapDispatchToProps = dispatch => (
    {
        boundLogout: bindActionCreators(AuthActionCreators.logout, dispatch)
    }
);

export default connect(
    mapStateToProps, mapDispatchToProps, null, {pure: false}
)(Header);

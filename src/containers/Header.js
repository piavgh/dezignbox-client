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
import {logout} from "../redux/actions/auth.actions";
import Auth from "../helpers/auth";

class Header extends Component {
  static propTypes = {
    currentUser: PropTypes.object
  };

  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

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
            <NavLink to="/products" tag={RRNavLink}>
              <DropdownItem>
                Products
              </DropdownItem>
            </NavLink>
            <DropdownItem divider/>
            <NavLink to="/transactions" tag={RRNavLink}>
              <DropdownItem>
                Transactions
              </DropdownItem>
            </NavLink>
            <DropdownItem divider/>
            <NavLink to="/" onClick={this.logOut} tag={RRNavLink}>
              <DropdownItem>
                Log Out
              </DropdownItem>
            </NavLink>
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
        <NavLink className="navbar-brand" to="/" exact tag={RRNavLink}><img src={"/images/dezignbox_logo.png"}
                                                       alt="Dezignbox Logo"/></NavLink>
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
    isLoginPending: state.authReducer.isLoginPending,
    isAuthenticated: state.authReducer.isAuthenticated,
    loginError: state.authReducer.loginError,
    currentUser: state.authReducer.currentUser
  }
);

const mapDispatchToProps = dispatch => (
  {
    boundLogout: bindActionCreators(logout, dispatch)
  }
);

export default connect(
  mapStateToProps, mapDispatchToProps, null, {pure: false}
)(Header);

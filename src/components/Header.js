import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import {NavLink as RRNavLink} from 'react-router-dom';


class Header extends Component {
    static propTypes = {
        isLoggedIn: PropTypes.bool.isRequired
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

    renderRightMenu() {
        if (this.props.isLoggedIn) {
            return <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink to="/start-design" tag={RRNavLink}>Start Designing</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Email
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>
                            Products
                        </DropdownItem>
                        <DropdownItem divider/>
                        <DropdownItem>
                            Logout
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
                    <NavLink to="/login" tag={RRNavLink}>Login</NavLink>
                </NavItem>
            </Nav>
        }
    }

    render() {
        return (
            <Navbar color="faded" light expand="md">
                <NavbarBrand href="/"><img src={"/images/dezignbox_logo.png"} alt={"Dezignbox Logo"}/></NavbarBrand>
                <NavbarToggler onClick={this.toggle}/>
                <Collapse isOpen={this.state.isOpen} navbar>
                    {this.renderRightMenu()}
                </Collapse>
            </Navbar>
        );
    }
}

export default Header;
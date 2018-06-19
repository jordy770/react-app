import React, { Component } from 'react'
import { Navbar , Nav, NavItem, NavbarBrand} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css';

export default class CustomNavbar extends Component {
  render() {
    return (
        <Navbar defauld collaseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to = "/">My Portfolio</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <NavItem eventKey={1} compontentClass={Link} href="/" to="/">
                    Home
                    </NavItem>
                    <NavItem eventKey={2} compontentClass={Link} href="/about" to="/about">
                    About
                    </NavItem>
                    <NavItem eventKey={3} compontentClass={Link} href="/project" to="/project">
                    Project
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
  }
}

import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/currentUser';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';

const NavBar = ({ logout }) => {
    return (
        <Navbar sticky="top" expand="lg" variant="dark" bg="dark">
            <Container id='navbar-container'>
                <Navbar.Brand to="/">Momentum</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="mr-auto">
                        <NavDropdown title="Menu" id="basic-nav-dropdown">
                            <LinkContainer 
                                to="/habits/#"
                                ><NavDropdown.Item>Home</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer
                                to="/habits/new"
                                ><NavDropdown.Item>Create</NavDropdown.Item>
                            </LinkContainer>
                            <NavDropdown.Divider/>
                            <LinkContainer 
                                to="/#"
                                onClick={logout}
                                ><NavDropdown.Item>Log Out</NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse> 
            </Container>
        </Navbar>
    );
};

export default connect(null,{ logout })(NavBar);
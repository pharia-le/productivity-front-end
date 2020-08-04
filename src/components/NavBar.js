import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/currentUser';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

const NavBar = ({ logout }) => {
    return (
        <Navbar sticky="top" expand="lg" variant="dark" bg="dark">
            <Container id='navbar-container'>
                <Navbar.Brand href="/">Productivity+</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link 
                            href="/habits"
                            >My Habits
                        </Nav.Link>
                        <Nav.Link
                            href="/habits/new"
                            >Create
                        </Nav.Link>
                        <Nav.Link
                            href="/about"
                            >About
                        </Nav.Link>
                        <Nav.Link
                            href="/about"
                            >FAQ
                        </Nav.Link>
                        <Nav.Link 
                            href="/#"
                            onClick={logout}
                            >Log Out
                        </Nav.Link>
                    </Nav>
            </Container>
        </Navbar>
    );
};

export default connect(null,{ logout })(NavBar);
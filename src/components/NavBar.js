import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/currentUser';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap'

const NavBar = ({ logout }) => {
    return (
        <Navbar sticky="top" expand="lg" variant="dark" bg="dark">
            <Container id='navbar-container'>
                <Navbar.Brand to="/">Productivity</Navbar.Brand>
                    <Nav className="mr-auto">
                        <LinkContainer 
                            to="/habits"
                            ><button>Habits</button>
                        </LinkContainer>
                        <LinkContainer
                            to="/habits/new"
                            ><button>Create</button>
                        </LinkContainer>
                        <LinkContainer 
                            to="/#"
                            onClick={logout}
                            ><button>Log Out</button>
                        </LinkContainer>
                    </Nav>
            </Container>
        </Navbar>
    );
};

export default connect(null,{ logout })(NavBar);
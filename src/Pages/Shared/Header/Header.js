import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png'
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img height="30" src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="home#services" className='text-white'>Services</Nav.Link>
                            <Nav.Link href="home#experts" className='text-white'>Experts</Nav.Link>
                            <NavDropdown title="Product List" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link className='text-white' as={Link} to="/about">About</Nav.Link>

                            {
                                user && <>
                                    <Nav.Link className='text-white' as={Link} to="/addservice">Add</Nav.Link>
                                    <Nav.Link className='text-white' as={Link} to="/manage">Manage</Nav.Link>
                                    <Nav.Link className='text-white' as={Link} to="/orders">Orders</Nav.Link>
                                </>
                            }

                            {
                                user ? <Button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Sign Out</Button>
                                    :
                                    <Nav.Link as={Link} to="Login" className='text-white'>Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    );
};

export default Header;
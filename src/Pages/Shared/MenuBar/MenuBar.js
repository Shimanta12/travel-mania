import React, { useState } from 'react';
import { Container, Nav, Navbar, Image, Modal } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from './../../../images/logo.jpg'

const Menubar = () => {
    const { user, logOut } = useAuth();
    const [smShow, setSmShow] = useState(false);

    return (
        <Navbar style={{ backgroundColor: 'white' }} collapseOnSelect expand="lg" variant="light fw-bold" fixed="top">
            <Container fluid>
                <Navbar.Brand as={NavLink} to="/home" style={{ width: '200px' }}>
                    <Image style={{ width: '60px' }} src={logo} fluid></Image>
                    <span className="cursive-text"><span className="text-primary">Travel</span>Mania</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto d-flex align-items-center">
                        <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                    </Nav>

                    {!user.email ? <Nav className="d-flex align-items-center"><Nav.Link as={NavLink} to="/signin"><button className="custom-btn">SignIn</button></Nav.Link>
                    </Nav>
                        : <Nav className="d-flex align-items-center">
                            <Nav.Link as={NavLink} to="/mybookings">My Bookings</Nav.Link>
                            <Nav.Link as={NavLink} to="/managebookings">Manage All Bookings</Nav.Link>
                            <Nav.Link as={NavLink} to="/addtour">Add Tour</Nav.Link>
                            <Nav.Link>
                                <Image onClick={() => setSmShow(true)} style={{ width: '40px' }} src={user.photoURL} roundedCircle fluid></Image>
                                <Modal
                                    size="sm"
                                    show={smShow}
                                    onHide={() => setSmShow(false)}
                                    aria-labelledby="example-modal-sizes-title-sm"
                                    className="fw-bold text-center"

                                >
                                    <Modal.Header closeButton>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Image style={{ width: '100px' }} src={user.photoURL} roundedCircle fluid></Image>
                                        <p className="text-primary mt-3">Hello {user.displayName}</p>
                                        <p className="text-primary" >Email: {user.email}</p>
                                    </Modal.Body>
                                </Modal>
                            </Nav.Link>
                            <Nav.Link><button onClick={logOut} className="custom-btn">Log Out</button></Nav.Link>
                        </Nav>}
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Menubar;
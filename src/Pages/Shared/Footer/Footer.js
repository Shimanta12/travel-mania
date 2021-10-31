import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <Container className="bg-dark p-5 text-center footer text-light footer" fluid>
            <Row xs={1} md={4} className="d-flex align-items-start">
                <Col>
                    <h4> <span className="cursive-text"><span className="text-primary">Travel</span>Mania</span></h4>
                    <br />
                    <i className="fab fa-facebook text-primary fs-3"></i>
                    <i className="fab fa-instagram  fs-3 ms-2"></i>
                    <i className="fab fa-twitter text-primary fs-3 ms-2"></i>
                </Col>
                <Col>
                    <h4>Pages</h4>
                    <Link to="/home">Home</Link><br />
                    <Link to="/mybookings">My Bookings</Link><br />
                    <Link to="/signin">Sign In</Link><br />
                </Col>
                <Col>
                    <h4>Destination</h4>
                    <Link to="/home">Vietnam</Link><br />
                    <Link to="/home">Indonesia</Link><br />
                    <Link to="/home">Thiland</Link><br />
                    <Link to="/home">Cambodia</Link>
                </Col>
                <Col>
                    <h4>Usefull pages</h4>
                    <Link to="/home">Privacy policy</Link><br />
                    <Link to="/home">Terms and condition</Link><br />
                    <Link to="/home">Pricing</Link>
                </Col>
            </Row>
            <p className="text-light fw-bold mt-5">&copy; 2021 TravelMania. All Rights Reserved.</p>
        </Container>
    );
};

export default Footer;
import React from 'react';
import { Col, Container } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <Container className="banner-container d-flex justify-content-center align-items-center" fluid>
            <Col className="col-md-6">
                <h1 className="banner-heading">Travel Makes One Modest, You See What a Tiny Place You Occupy In The World.</h1>
                <p className="fs-5 cursive-text">Since 2016, we’ve helped more than 200,000 people of all ages enjoy the best outdoor experience.</p>
                <button className="custom-btn">Explore tours <br /><i className="fas fa-angle-down"></i></button>
            </Col>
        </Container>
    );
};

export default Banner;
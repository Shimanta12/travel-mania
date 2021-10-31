import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import aboutImg from './../../../images/aboutUs.jpg';


const AboutUs = () => {
    return (
        <Container className="mt-5">
            <h4 className="cursive-text highlighted-heading">About us</h4>
            <h1 className="cursive-text">Never Be Alone</h1>
            <Row md={2} xs={1} className="text-start mt-3">
                <Col>
                    <Image src={aboutImg} rounded fluid></Image>
                </Col>
                <Col className="mt-4">
                    <p>Since 2016, we’ve helped more than 200,000 people of all ages enjoy the best outdoor experience of their lives. Whether it’s for one day or a two-week vacation, close to home or a foreign land and something like that.</p>
                    <h3 className="cursive-text my-5">Why Choose Us</h3>
                    <div className="d-flex">
                        <i className="fas fa-file-alt fs-1 me-3 highlighted-heading"></i>
                        <div>
                            <p>Booking <br /> With Spread Payment</p>
                        </div>
                    </div>
                    <div className="d-flex">
                        <i className="fas fa-bolt fs-1 me-3 highlighted-heading"></i>
                        <div>
                            <p>Sleep and Travel<br /> in Comfort</p>
                        </div>
                    </div>
                    <div className="d-flex">
                        <i className="fas fa-id-badge fs-1 me-3 highlighted-heading"></i>
                        <div>
                            <p>Fully Licensed <br /> Tour Operator</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutUs;
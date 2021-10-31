import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import discountImg1 from './../../../images/discount-image.png';
import discountImg2 from './../../../images/discount-image2.png';

const Discount = () => {
    return (
        <Container className="mt-5">
            <h4 className="cursive-text highlighted-heading">Multi-Tours</h4>
            <h2 className="mt-3 cursive-text">Discount On Quantity</h2>
            <Row md={2} xs={1} className="text-start">
                <Col className="text-center">
                    <Image src={discountImg1} fluid></Image>
                    <p className="mt-3">Book a tour today and enjoy exclusive savings on any future trip you book! There’s no time limit or expiry date on these savings</p>
                    <h4 className="cursive-text highlighted-heading">10% discount on 2nd tour</h4>
                    <h4 className="cursive-text highlighted-heading">20% discount on 3rd tour</h4>
                </Col>
                <Col>
                    <Image src={discountImg2} fluid></Image>
                </Col>
            </Row>
        </Container>
    );
};

export default Discount;
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Rating from 'react-rating';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './PlaceBooking.css';

const PlaceBooking = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();

    const [service, setService] = useState({});
    const { id } = useParams();

    const { name, description, image, price, rating, location } = service;

    useEffect(() => {
        const url = `https://ghoulish-shadow-36873.herokuapp.com/services/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, []);

    const onSubmit = data => {
        data.bookedTour = service;
        data.status = 'pending';
        fetch('https://ghoulish-shadow-36873.herokuapp.com/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Tour booked Successfully');
                    reset();
                }
            })
    };


    return (
        <Container className="my-5 text-start">
            <h1 className="cursive-text text-center mb-5">Tour Details</h1>
            <Row md={2} xs={1} className="g-4">
                <Col className="p-3">
                    <h4 className="cursive-text">{name}</h4>
                    <p>{description}</p>
                    <h5><i className="fas fa-map-marker-alt text-danger"></i> {location}</h5>
                    <div className="d-flex justify-content-between align-items-center mt-3 fw-bold">
                        <div className="">
                            <h5>Price <br /> {price}</h5>
                        </div>
                        <div className="">
                            <p className="m-0">Rating</p>
                            <Rating
                                className="text-warning"
                                initialRating={rating}
                                emptySymbol="far fa-star"
                                fullSymbol="fas fa-star"
                                readonly
                            ></Rating>
                        </div>
                    </div>
                </Col>
                <Col>
                    <Image src={image} rounded fluid></Image>
                </Col>
            </Row>
            <Col className="col-md-6 mx-auto">
                <h2 className="cursive-text mt-3">Please Provide Necessary Information</h2>
                <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>
                    <input defaultValue={user.displayName} {...register("name")} required />
                    <input defaultValue={user.email} {...register("email", { required: true })} />
                    <input placeholder="Address" defaultValue="" {...register("address")} required />
                    <input placeholder="Phone number" defaultValue="" {...register("phone")} required />

                    <input type="submit" className="custom-btn" value="Book Now" />
                </form>
            </Col>
        </Container>
    );
};

export default PlaceBooking;
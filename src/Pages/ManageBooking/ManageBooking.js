import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';

const ManageBooking = (props) => {
    const { name, price, image, duration, groupSize } = props.bookedTour;

    return (
        <Row md={2} xs={1} className="text-start my-3">
            <Col>
                <Image src={image} rounded fluid></Image>
            </Col>
            <Col>
                <h3>{name}</h3>
                <p>Price: {price}</p>
                <p><i className="fas fa-calendar-alt fs-3 me-2 text-success"></i>Duration: {duration}</p>
                <p><i className="fas fa-users fs-3 me-2 text-success"></i>Group Size: {groupSize}</p>
                {
                    props.status === 'pending' ?
                        <div className="">
                            <h4 className="cursive-text highlighted-heading fw-bold">Pending !</h4>
                            <button onClick={() => props.handleUpdateStatus(props.bookingId)} className="custom-btn">Approve</button>
                        </div>
                        :
                        <h4 className="mt-3 cursive-text highlighted-heading fw-bold">Approved !</h4>
                }
                <button onClick={() => props.handleDeleteBooking(props.bookingId)} className="custom-btn mt-3">Delete Booking</button>
            </Col>
        </Row>
    );
};

export default ManageBooking;
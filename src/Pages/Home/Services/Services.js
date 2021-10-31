import React, { useEffect, useState } from 'react';
import ScaleLoader from "react-spinners/ScaleLoader";
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('https://ghoulish-shadow-36873.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setLoading(false)
            });
    }, [])

    return (
        <Container id="tours" className="mt-5">
            {
                loading ?
                    <div style={{ height: '100vh' }} className="d-flex align-items-center justify-content-center">
                        <ScaleLoader color={'dodgerblue'} loading={loading} size={30} />
                    </div>
                    :
                    <div >
                        <h4 className="cursive-text highlighted-heading">Fresh Deals</h4>
                        <h1 className="cursive-text">We’ve Got Some Great Deals</h1>
                        <Row md={2} lg={3} className="g-4">
                            {
                                services.map(service => <Service key={service._id} service={service}></Service>)
                            }
                        </Row>
                    </div>
            }

        </Container>
    );
};

export default Services;
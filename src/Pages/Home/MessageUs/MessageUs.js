import React from 'react';
import { Container } from 'react-bootstrap';
import './MessageUs.css';

const MessageUs = () => {
    return (
        <Container className="messageUs-container d-flex justify-content-center align-items-center mt-5 text-light" fluid>
            <div className="">
                <i className="fab fa-telegram-plane "></i>
                <h2>Great Deals. Amazing Chat. Straight to Your Inbox</h2>
                <input type="text" placeholder="your name" />
                <input type="email" name="" id="" placeholder="your email" />
                <button className="custom-btn mt-3">Message Us</button>
            </div>
        </Container>
    );
};

export default MessageUs;
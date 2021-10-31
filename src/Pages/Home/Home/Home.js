import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Discount from '../Discount/Discount';
import MessageUs from '../MessageUs/MessageUs';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
                <Services></Services>
                <AboutUs></AboutUs>
                <Discount></Discount>
                <MessageUs></MessageUs>
            </div>
        </div>
    );
};

export default Home;
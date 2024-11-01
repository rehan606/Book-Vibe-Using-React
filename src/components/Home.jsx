import React from 'react';
import Banner from './Banner';
import Books from './Books';

const Home = () => {
    return (
        <div className="container mx-auto px-2">
            <Banner></Banner>
            <Books></Books>
        </div>
    );
};

export default Home;
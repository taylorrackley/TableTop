import React, { Component } from 'react';
import './homePage.css';
import Navbar from '../navbar/navbar';

class HomePage extends Component {
    render() {
        return (
            // Pass username
            <div id="homepage-container">
                <Navbar />
            </div>
        );
    }
}

export default HomePage;

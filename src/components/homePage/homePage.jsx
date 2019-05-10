import React, { Component } from 'react';
import './homePage.css';
import Profile from '../profile/profile';

class HomePage extends Component {
    render() {
        return (
            // Pass username
            <Profile username={'Emma Grebe'}/>
        );
    }
}

export default HomePage;

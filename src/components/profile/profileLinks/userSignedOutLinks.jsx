import React, { Component } from 'react';
import './profileLinks.css';
import { Link } from 'react-router-dom';

class UserSignedOutLinks extends Component {

    render() {
        return (
            <div id="profileLinksContainer">
                <Link to="/login"><button id="profileLinksLogoutBtn" className="profileLinksContainerBtn">Login</button></Link>
            </div>
        );
    }
}

export default UserSignedOutLinks;

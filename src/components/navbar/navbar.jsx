import React, { Component } from 'react';
import './navbar.css';
import Profile from '../profile/profile';
import PayTab from '../payTab/payTab';
import showProfileIcon from '../../img/profile_hamburger_icon.png';

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userProfile: false,
            pinView: false
        };
    }

    showPinView = () => {
        this.setState({pinView: true});
    }

    hidePinView = () => {
        this.setState({pinView: false});
    }

    showUserProfile = () => {
        this.setState({userProfile: true});
    }

    hideUserProfile = () => {
        this.setState({userProfile: false});
    }

    render() {
        var showPaytabModule = this.state.pinView ? <PayTab hidePinView={this.hidePinView} /> : '';
        var showUserProfileModule = this.state.userProfile ? <Profile username={'Emma Grebe'} closeProfileView={this.hideUserProfile}/> : '';
        return (
            <div id="navbar-container">
                <div id="pay-tab-btn" onClick={this.showPinView}>Pay a Tab</div>
                <img id="show-profile-icon" src={showProfileIcon} onClick={this.showUserProfile} alt="Show Profile View" />
                {showPaytabModule}
                {showUserProfileModule}
            </div>
        );
    }
}

export default Navbar;

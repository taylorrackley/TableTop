import React, { Component } from 'react';
import './navbar.css';
import Profile from '../profile/profile';
import showProfileIcon from '../../img/profile_hamburger_icon.png';

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            paytab: false,
            userProfile: false
        };

    }

    paytab = () => {
        this.setState({paytab: true});
    }

    showUserProfile = () => {
        this.setState({userProfile: true});
    }

    render() {
        var showPaytabModule = this.state.paytab ? 'paytab module' : '';
        var showUserProfileModule = this.state.userProfile ? <Profile username={'Emma Grebe'}/> : '';
        return (
            <div id="navbar-container">
                <div id="pay-tab-btn" onClick={this.paytab}>Pay a Tab</div>
                <img id="show-profile-icon" src={showProfileIcon} onClick={this.showUserProfile} alt="Show Profile View" />
                {showPaytabModule}
                {showUserProfileModule}
            </div>
        );
    }
}

export default Navbar;

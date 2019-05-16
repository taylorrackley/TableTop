import React, { Component } from 'react';
import './navbar.css';
import Profile from '../profile/profile';
import showProfileIcon from '../../img/profile_hamburger_icon.png';

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userProfile: false
            // pinView: false
        };
    }

    // showPinView = () => {
    //     this.setState({pinView: true});
    // }
    //
    // hidePayTabView = () => {
    //     this.setState({pinView: false});
    // }

    showUserProfile = () => {
        this.setState({userProfile: true});
    }

    hideUserProfile = () => {
        this.setState({userProfile: false});
    }

    render() {
        // var showPaytabModule = this.state.pinView ? <PayTab hidePayTabView={this.hidePayTabView} /> : '';
        var showUserProfileModule = this.state.userProfile ? <Profile username={'Emma Grebe'} closeProfileView={this.hideUserProfile}/> : '';
        return (
            <div id="navbar-container" className="clearfix">
                <p id="insertedText">{this.props.insertedText}</p>
                <div><img id="show-profile-icon" src={showProfileIcon} onClick={this.showUserProfile} alt="Show Profile View" /></div>
                {showUserProfileModule}
            </div>
        );
    }
}

export default Navbar;

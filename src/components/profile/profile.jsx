import React, { Component } from 'react';
import './profile.css';

import profileImage from '../../img/profile_image_icon.png';
import closeIcon from '../../img/close_icon.png';
import UserSignedInProfileLinks from './profileLinks/userSignedInProfileLinks';
import UserSignedOutLinks from './profileLinks/userSignedOutLinks';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animateProfileView: 'growProfileLeft'
        }
    }

    closeProfileView = () => {
        this.setState({animateProfileView: 'shrinkProfileRight'});
        setTimeout(() => {
            this.props.closeProfileView();
        }, 300);
    }

    render() {
        const links = this.props.auth.uid ? <UserSignedInProfileLinks /> : <UserSignedOutLinks />;
        const firstName = this.props.profile.first_name ? this.props.profile.first_name : ''
        const lastName = this.props.profile.last_name ? this.props.profile.last_name : ''

        return (
            <div id="profileContainer" className={this.state.animateProfileView}>
                <img id="closeProfileView" src={closeIcon} onClick={this.closeProfileView} alt="Close Profile View" />
                <img id="profileImage" src={profileImage} alt="Profile" />
                <p id="profileViewUsername" className="profileTopText" >{firstName+' '+lastName}</p>
                <Link to="/profile/edit"><p id="profileViewEditUserBtn" className="profileTopText">Edit Profile</p></Link>
                { links }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    };
}

export default connect(mapStateToProps)(Profile);

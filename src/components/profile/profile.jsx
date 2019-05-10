import React, { Component } from 'react';
import './profile.css';
import profileImage from '../../img/profile_image_icon.png';
import closeIcon from '../../img/close_icon.png';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animateProfileView: 'start-offscreen-right'
        }
    }

    componentDidMount(){
       setTimeout(() => {
            this.setState({animateProfileView: 'animate-slide-from-right'})
        }, 0)
    }

    closeProfileView = () => {
        this.setState({animateProfileView: 'animate-slide-to-right'});
        setTimeout(() => {
            this.props.closeProfileView();
        }, 300);
    }

    render() {
        return (
            <div id="profile-container" className={this.state.animateProfileView}>
                <img id="close-profile-view" src={closeIcon} onClick={this.closeProfileView} alt="Close Profile View" />
                <img id="profile-image" src={profileImage} alt="Profile" />
                <p id="profile-view-username" className="profile-top-text" >{this.props.username}</p>
                <p id="profile-view-edit-user-btn" className="profile-top-text">Edit Profile</p>
                <div>
                </div>
            </div>
        );
    }
}

export default Profile;

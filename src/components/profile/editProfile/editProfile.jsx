import React, { Component } from 'react';
import './editProfile.css';
import profileImage from '../../../img/profile_image_red_icon.png';

import Navbar from '../../navbar/navbar';

class EditProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            LastName: '',
            dob: '',
            email: '',
            username: '',
            password: '',
            confirmPassword: '',
            address: '',
            city: '',
            state: '',
            zip: ''
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.userLogin(this.state);
        // this.props.userLogin(this.state.username, this.state.password);
    }

    render() {
        return (
            <div className="container">
                <Navbar insertedText="" />
                <div id="editProfileWrapper">
                    <img id="editProfileImage" src={profileImage} alt="Profile" />
                    <p id="editProfleImageText">Edit Photo</p>
                    <form onSubmit={this.handleSubmit} id="editProfileForm">
                        <div className="editProfileInputSection">
                            <input name="firstName" className="editProfileInputField" type="text" onChange={this.handleChange} placeholder="First Name" />
                            <input name="lastName" className="editProfileInputField" type="text" onChange={this.handleChange} placeholder="Last Name" />
                            <input name="dob" className="editProfileInputField" type="text" onChange={this.handleChange} placeholder="Date of Birth" />
                            <input name="email" className="editProfileInputField" type="email" onChange={this.handleChange} placeholder="Email" />
                        </div>
                        <div className="editProfileInputSection">
                            <input name="username" className="editProfileInputField" type="text" onChange={this.handleChange} placeholder="Username" />
                            <input name="password" className="editProfileInputField" type="password" onChange={this.handleChange} placeholder="Password" />
                            <input name="confirmPassword" className="editProfileInputField" type="password" onChange={this.handleChange} placeholder="Confirm Password" />
                        </div>
                        <div className="editProfileInputSection">
                            <input name="address" className="editProfileInputField" type="text" onChange={this.handleChange} placeholder="Address" />
                            <input name="city" className="editProfileInputField editProfileInputLeft" type="text" onChange={this.handleChange} placeholder="City" />
                            <input name="state" className="editProfileInputField editProfileInputCenter" type="text" onChange={this.handleChange} placeholder="State" />
                            <input name="zip" className="editProfileInputField editProfileInputRight" type="text" onChange={this.handleChange} placeholder="ZIP" />
                        </div>
                        <button className="editProfileInputField editProfileSubmit">Update Account</button>
                    </form>
                </div>
            </div>
        );
    }

}


export default EditProfile;

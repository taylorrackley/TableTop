import React, { Component } from 'react';
import './editProfile.css';
import profileImage from '../../../img/profile_image_red_icon.png';

import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

class EditProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            dob: '',
            // email: '',
            // username: '',
            password: '',
            confirmPassword: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            firstNameError: '',
            lastNameError: '',
            dobError: '',
            emailError: '',
            passwordError: '',
            passwordConfirmError: '',
            addressError: '',
            cityError: '',
            stateError: '',
            zipError: ''
        };
    }

    componentWillReceiveProps = (newProps) => {
        this.setState({
            firstName: newProps.profile.firstName,
            lastName: newProps.profile.lastName,
            dob: newProps.profile.date_of_birth,
            address: newProps.profile.address,
            city: newProps.profile.city,
            state: newProps.profile.state,
            zip: newProps.profile.zip
            // email: newProps.profile.email
        });
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.validForm()) {
            console.log('update is valid');
            // this.props.userSignUpDefault(this.state);
        }
    }

    validForm = () => {
        let firstNameError = '';
        let lastNameError = '';
        let dobError = '';
        let emailError = '';
        let passwordError = '';
        let passwordConfirmError = '';
        let addressError = '';
        let cityError = '';
        let stateError = '';
        let zipError = '';

        if(this.state.firstName === '') {
            firstNameError = 'First name is blank';
        }

        if(this.state.lastName === '') {
            lastNameError = 'Last name is blank';
        }

        // if(!this.state.email.includes('@')) {
        //     emailError = 'Invalid email';
        // }

        if(this.state.password !== '' && this.state.password.length < 6) {
            passwordError = 'Password must be 6 characters long';
        }

        if(this.state.password !== this.state.confirmPassword) {
            passwordConfirmError = 'Passwords do not match';
        }

        if(this.state.address === '') {
            addressError = 'Address is blank';
        }

        if(this.state.city === '') {
            cityError = 'City is blank';
        }

        if(this.state.state === '') {
            stateError = 'State is blank';
        }

        if(this.state.zip === '') {
            zipError = 'Zip is blank';
        }

        this.setState({firstNameError, lastNameError, dobError, emailError, passwordError, passwordConfirmError, addressError, cityError, stateError, zipError});

        if(firstNameError || lastNameError || dobError || emailError || passwordError || passwordConfirmError || addressError || cityError || stateError || zipError) {
            return false;
        }

        return true;
    }

    render() {
        if(!this.props.auth.uid) {
            return( <Redirect to='/login' /> );
        }   

        return (
            <div className="container">
                {/* <Navbar insertedText="" /> */}
                <div id="editProfileWrapper">
                    <img id="editProfileImage" src={profileImage} alt="Profile" />
                    <p id="editProfleImageText">Edit Photo</p>
                    <form onSubmit={this.handleSubmit} id="editProfileForm">
                        <div className="editProfileInputSection">
                            <input name="firstName" className="editProfileInputField" type="text" onChange={this.handleChange} value={this.state.firstName} placeholder="First Name" />
                            {this.state.firstNameError ? <div className="invalidFormInputEditProfile">{this.state.firstNameError}</div> : ''}
                            <input name="lastName" className="editProfileInputField" type="text" onChange={this.handleChange} value={this.state.lastName} placeholder="Last Name" />
                            {this.state.lastNameError ? <div className="invalidFormInputEditProfile">{this.state.lastNameError}</div> : ''}
                            <input name="dob" className="editProfileInputField" type="text" onChange={this.handleChange} value={this.state.dob} placeholder="Date of Birth" />
                            {this.state.dobError ? <div className="invalidFormInpuEditProfile">{this.state.dobError}</div> : ''}
                            {/* <input name="email" className="editProfileInputField" type="email" onChange={this.handleChange} value={this.state.email} placeholder="Email" /> */}
                        </div>
                        <div className="editProfileInputSection">
                            {/* <input name="username" className="editProfileInputField" type="text" onChange={this.handleChange} placeholder="Username" /> */}
                            <input name="password" className="editProfileInputField" type="password" onChange={this.handleChange} value={this.state.password} placeholder="Password" />
                            {this.state.passwordError ? <div className="invalidFormInputEditProfile">{this.state.passwordError}</div> : ''}
                            <input name="confirmPassword" className="editProfileInputField" type="password" onChange={this.handleChange} value={this.state.passwordConfirm} placeholder="Confirm Password" />
                            {this.state.passwordConfirmError ? <div className="invalidFormInputEditProfile">{this.state.passwordConfirmError}</div> : ''}
                        </div>
                        <div className="editProfileInputSection">
                            <input name="address" className="editProfileInputField" type="text" onChange={this.handleChange} value={this.state.address} placeholder="Address" />
                            {this.state.addressError ? <div className="invalidFormInputEditProfile">{this.state.addressError}</div> : ''}
                            <input name="city" className="editProfileInputField editProfileInputLeft" type="text" onChange={this.handleChange} value={this.state.city} placeholder="City" />
                            <input name="state" className="editProfileInputField editProfileInputCenter" type="text" onChange={this.handleChange} value={this.state.state} placeholder="State" />
                            <input name="zip" className="editProfileInputField editProfileInputRight" type="text" onChange={this.handleChange} value={this.state.zip} placeholder="ZIP" />
                            {this.state.cityError ? <div className="invalidFormInputEditProfile">{this.state.cityError}</div> : ''}
                            {this.state.stateError ? <div className="invalidFormInputEditProfile">{this.state.stateError}</div> : ''}
                            {this.state.zipError ? <div className="invalidFormInputEditProfile">{this.state.zipError}</div> : ''}
                        </div>
                        <button className="editProfileInputField editProfileSubmit">Update Account</button>
                    </form>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

const mapDispatchProps = (dispatch) => {
    return {
        // userSignUpDefault: (newUser) => dispatch(userSignUpDefault(newUser)) // Username and password are passed from this.state
    }
}

export default connect(mapStateToProps, mapDispatchProps)(EditProfile);

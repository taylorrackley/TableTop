import React, { Component } from 'react';
import './createProfile.css';
import profileImage from '../../../img/profile_image_red_icon.png';

import { connect } from 'react-redux';

import { Redirect } from 'react-router-dom'
import { userSignUpDefault } from '../../../store/actions/authActions';

class CreateProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            dob: '',
            email: '',
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

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.validForm()) {
            this.props.userSignUpDefault(this.state);
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

        if(!this.state.email.includes('@')) {
            emailError = 'Invalid email';
        }

        if(this.state.password.length < 6) {
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

        if(firstNameError || lastNameError || dobError || emailError || passwordError || passwordConfirmError || addressError || cityError || stateError || zipError) {
            this.setState({firstNameError, lastNameError, dobError, emailError, passwordError, passwordConfirmError, addressError, cityError, stateError, zipError});
            return false;
        }

        return true;
    }

    render() {
        if(this.props.auth.uid) {
            return( <Redirect to='/' /> );
        }   

        return (
            <div className="container">
                <div id="createProfileWrapper">
                    <img id="createProfileImage" src={profileImage} alt="Profile" />
                    <p id="createProfleImageText">Add Photo</p>
                    <form onSubmit={this.handleSubmit} id="createProfileForm">
                        <div className="createProfileInputSection">
                            <input name="firstName" className="createProfileInputField" type="text" onChange={this.handleChange} placeholder="First Name" />
                            {this.state.firstNameError ? <div className="invalidFormInput">{this.state.firstNameError}</div> : ''}
                            <input name="lastName" className="createProfileInputField" type="text" onChange={this.handleChange} placeholder="Last Name" />
                            {this.state.lastNameError ? <div className="invalidFormInput">{this.state.lastNameError}</div> : ''}
                            <input name="dob" className="createProfileInputField" type="text" onChange={this.handleChange} placeholder="Date of Birth" />
                            {this.state.dobError ? <div className="invalidFormInput">{this.state.dobError}</div> : ''}
                        </div>
                        <div className="createProfileInputSection">
                            <input name="email" className="createProfileInputField" type="email" onChange={this.handleChange} placeholder="Email" />
                            {this.state.emailError ? <div className="invalidFormInput">{this.state.emailError}</div> : ''}
                            {/* <input name="username" className="createProfileInputField" type="text" onChange={this.handleChange} placeholder="Username" /> */}
                            <input name="password" className="createProfileInputField" type="password" onChange={this.handleChange} placeholder="Password" />
                            {this.state.passwordError ? <div className="invalidFormInput">{this.state.passwordError}</div> : ''}
                            <input name="confirmPassword" className="createProfileInputField" type="password" onChange={this.handleChange} placeholder="Confirm Password" />
                            {this.state.passwordConfirmError ? <div className="invalidFormInput">{this.state.passwordConfirmError}</div> : ''}
                        </div>
                        <div className="createProfileInputSection">
                            <input name="address" className="createProfileInputField" type="text" onChange={this.handleChange} placeholder="Address" />
                            {this.state.addressError ? <div className="invalidFormInput">{this.state.addressError}</div> : ''}
                            <input name="city" className="createProfileInputField createProfileInputLeft" type="text" onChange={this.handleChange} placeholder="City" />
                            <input name="state" className="createProfileInputField createProfileInputCenter" type="text" onChange={this.handleChange} maxLength="2" placeholder="State" />
                            <input name="zip" className="createProfileInputField createProfileInputRight" type="text" onChange={this.handleChange} placeholder="ZIP" />
                            {this.state.cityError ? <div className="invalidFormInput">{this.state.cityError}</div> : ''}
                            {this.state.stateError ? <div className="invalidFormInput">{this.state.stateError}</div> : ''}
                            {this.state.zipError ? <div className="invalidFormInput">{this.state.zipError}</div> : ''}
                        </div>
                        <button className="createProfileInputField createProfileSubmit">Create Account</button>
                    </form>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchProps = (dispatch) => {
    return {
        userSignUpDefault: (newUser) => dispatch(userSignUpDefault(newUser)) // Username and password are passed from this.state
    }
}

export default connect(mapStateToProps, mapDispatchProps)(CreateProfile);

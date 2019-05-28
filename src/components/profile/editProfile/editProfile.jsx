import React, { Component } from 'react';
import './editProfile.css';
import profileImage from '../../../img/profile_image_red_icon.png';

import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

class EditProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            profile: {
                firstName: '',
                lastName: '',
                date_of_birth: '',
                address: '',
                city: '',
                state: '',
                zip: ''
            },
            password: '',
            confirmPassword: '',
            formErrors: {
                firstName: '',
                lastName: '',
                dateOfBirth: '',
                email: '',
                password: '',
                passwordConfirm: '',
                address: '',
                city: '',
                state: '',
                zip: ''
            }
        };
    }

    componentDidUpdate(prevProps) {
        if(Object.keys(this.props.profile).length !== Object.keys(prevProps.profile).length) {
            this.setState({profile: this.props.profile});
        }
    }

    handleChange = (e) => {
        this.setState({
            profile: {
                [e.target.name]: e.target.value
            }
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
        this.setState({
            formErrors: {
                firstName: '',
                lastName: '',
                dateOfBirth: '',
                email: '',
                password: '',
                passwordConfirm: '',
                address: '',
                city: '',
                state: '',
                zip: ''
            }
        });

        if(this.state.profile.firstName === '') {
            this.setState({formErrors: {firstName: 'First name is blank'}});
        }

        if(this.state.profile.lastName === '') {
            this.setState({formErrors: {lastName: 'Last name is blank'}});
        }

        // if(!this.state.email.includes('@')) {
        //     emailError = 'Invalid email';
        // }

        if(this.state.password !== '' && this.state.password.length < 6) {
            this.setState({formErrors: {password: 'Password must be 6 characters long'}});
        }

        if(this.state.password !== this.state.confirmPassword) {
            this.setState({formErrors: {passwordConfirm: 'Passwords do not match'}});
        }

        if(this.state.profile.address === '') {
            this.setState({formErrors: {address: 'Address is blank'}});
        }

        if(this.state.profile.city === '') {
            this.setState({formErrors: {city: 'City is blank'}});
        }

        if(this.state.profile.state === '') {
            this.setState({formErrors: {state: 'State is blank'}});
        }

        if(this.state.profile.zip === '') {
            this.setState({formErrors: {zip: 'Zip is blank'}});
        }

        if(this.state.formErrors) {
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
                            <input name="firstName" className="editProfileInputField" type="text" onChange={this.handleChange} value={this.state.profile.firstName} placeholder="First Name" />
                            {this.state.formErrors.firstName ? <div className="invalidFormInputEditProfile">{this.state.formErrors.firstName}</div> : ''}
                            <input name="lastName" className="editProfileInputField" type="text" onChange={this.handleChange} value={this.state.profile.lastName} placeholder="Last Name" />
                            {this.state.formErrors.lastName ? <div className="invalidFormInputEditProfile">{this.state.formErrors.lastName}</div> : ''}
                            <input name="dob" className="editProfileInputField" type="text" onChange={this.handleChange} value={this.state.profile.date_of_birth} placeholder="Date of Birth" />
                            {this.state.formErrors.dateOfBirth ? <div className="invalidFormInpuEditProfile">{this.state.formErrors.dateOfBirth}</div> : ''}
                            {/* <input name="email" className="editProfileInputField" type="email" onChange={this.handleChange} value={this.state.email} placeholder="Email" /> */}
                        </div>
                        <div className="editProfileInputSection">
                            {/* <input name="username" className="editProfileInputField" type="text" onChange={this.handleChange} placeholder="Username" /> */}
                            <input name="password" className="editProfileInputField" type="password" onChange={this.handleChange} value={this.state.password} placeholder="Password" />
                            {this.state.formErrors.password ? <div className="invalidFormInputEditProfile">{this.state.formErrors.password}</div> : ''}
                            <input name="confirmPassword" className="editProfileInputField" type="password" onChange={this.handleChange} value={this.state.passwordConfirm} placeholder="Confirm Password" />
                            {this.state.formErrors.passwordConfirm ? <div className="invalidFormInputEditProfile">{this.state.formErrors.passwordConfirm}</div> : ''}
                        </div>
                        <div className="editProfileInputSection">
                         <input name="address" className="editProfileInputField" type="text" onChange={this.handleChange} value={this.state.profile.address} placeholder="Address" />
                            {this.state.formErrors.address ? <div className="invalidFormInputEditProfile">{this.state.formErrors.address}</div> : ''}
                            <input name="city" className="editProfileInputField editProfileInputLeft" type="text" onChange={this.handleChange} value={this.state.profile.city} placeholder="City" />
                            <input name="state" className="editProfileInputField editProfileInputCenter" type="text" onChange={this.handleChange} value={this.state.profile.state} placeholder="State" />
                            <input name="zip" className="editProfileInputField editProfileInputRight" type="text" onChange={this.handleChange} value={this.state.profile.zip} placeholder="ZIP" />
                            {this.state.formErrors.city ? <div className="invalidFormInputEditProfile">{this.state.formErrors.city}</div> : ''}
                            {this.state.formErrors.state ? <div className="invalidFormInputEditProfile">{this.state.formErrors.state}</div> : ''}
                            {this.state.formErrors.zip ? <div className="invalidFormInputEditProfile">{this.state.formErrors.zip}</div> : ''}
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

import React, { Component } from 'react';
import './editProfile.css';
import profileImage from '../../../img/profile_image_red_icon.png';

import MaskedInput from 'react-text-mask'

import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

import { userUpdate } from '../../../store/actions/authActions'

class EditProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            first_name: this.props.profile.first_name || '',
            last_name: this.props.profile.last_name || '',
            date_of_birth: this.props.profile.date_of_birth || '',
            address: this.props.profile.address || '',
            city: this.props.profile.city || '',
            state: this.props.profile.state || '',
            zip: this.props.profile.zip || '',
            password: '',
            confirmPassword: '',
            formErrors: {
                first_name: '',
                last_name: '',
                date_of_birth: '',
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

    handleChange = (e) => {
        e.persist()
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.validForm()) {
            let profile = {
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                date_of_birth: this.state.date_of_birth,
                address: this.state.address,
                city: this.state.city,
                state: this.state.state,
                zip: this.state.zip
            }
            this.props.userUpdate(profile);
            this.setState({profileUpdated: true});
        }
    }

    validForm = () => {
        this.setState({
            formErrors: {
                first_name: '',
                last_name: '',
                date_of_birth: '',
                email: '',
                password: '',
                passwordConfirm: '',
                address: '',
                city: '',
                state: '',
                zip: ''
            }
        });
        let valid = true

        if(this.state.first_name === '') {
            this.setState({formErrors: {first_name: 'First name is blank'}});
            valid = false
        }

        if(this.state.last_name === '') {
            this.setState({formErrors: {last_name: 'Last name is blank'}});
            valid = false
        }

        if(this.state.date_of_birth === '') {
            this.setState({formErrors: {date_of_birth: 'Date of birth is invalid'}});
            valid = false
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

        if(this.state.address === '') {
            this.setState({formErrors: {address: 'Address is blank'}});
            valid = false
        }

        if(this.state.city === '') {
            this.setState({formErrors: {city: 'City is blank'}});
            valid = false
        }

        if(this.state.state === '') {
            this.setState({formErrors: {state: 'State is blank'}});
            valid = false
        }

        if(this.state.zip === '') {
            this.setState({formErrors: {zip: 'Zip is blank'}});
            valid = false
        }

        if(!valid) {
            return false;
        }

        return true;
    }

    render() {
        if (!this.props.auth.uid) {
            return( <Redirect to='/login' /> );
        }

        if (this.state.profileUpdated) {
            this.props.history.goBack()
        }

        return (
            <div className="container">
                {/* <Navbar insertedText="" /> */}
                <div id="editProfileWrapper">
                    <img id="editProfileImage" src={profileImage} alt="Profile" />
                    <p id="editProfleImageText">Edit Profile</p>
                    <form onSubmit={this.handleSubmit} id="editProfileForm">
                        <div className="editProfileInputSection">
                            <input name="first_name" className="editProfileInputField" type="text" onChange={this.handleChange} value={this.state.first_name} placeholder="First Name" />
                            {this.state.formErrors.first_name ? <div className="invalidFormInputEditProfile">{this.state.formErrors.first_name}</div> : ''}
                            <input name="last_name" className="editProfileInputField" type="text" onChange={this.handleChange} value={this.state.last_name} placeholder="Last Name" />
                            {this.state.formErrors.last_name ? <div className="invalidFormInputEditProfile">{this.state.formErrors.last_name}</div> : ''}
                            <MaskedInput
                            name="date_of_birth" className="editProfileInputField" type="text" onChange={this.handleChange} value={this.state.date_of_birth} placeholder="Date of Birth"
                            mask={[/[0-1]/, /[0-9]/, '/', /[0-3]/, /[0-9]/, '/', /[1-2]/, /[0-9]/, /[0-9]/, /[0-9]/]}
                            />
                            {/* <input name="dob" className="editProfileInputField" type="text" onChange={this.handleChange} value={this.state.profile.date_of_birth} placeholder="Date of Birth" /> */}
                            {this.state.formErrors.dateOfBirth ? <div className="invalidFormInpuEditProfile">{this.state.formErrors.date_of_birth}</div> : ''}
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
                         <input name="address" className="editProfileInputField" type="text" onChange={this.handleChange} value={this.state.address} placeholder="Address" />
                            {this.state.formErrors.address ? <div className="invalidFormInputEditProfile">{this.state.formErrors.address}</div> : ''}
                            <input name="city" className="editProfileInputField editProfileInputLeft" type="text" onChange={this.handleChange} value={this.state.city} placeholder="City" />
                            <input name="state" className="editProfileInputField editProfileInputCenter" type="text" onChange={this.handleChange} value={this.state.state} placeholder="State" />
                            <input name="zip" className="editProfileInputField editProfileInputRight" type="text" onChange={this.handleChange} value={this.state.zip} placeholder="ZIP" />
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
        userUpdate: (profile) => dispatch(userUpdate(profile))
    }
}

export default connect(mapStateToProps, mapDispatchProps)(EditProfile);

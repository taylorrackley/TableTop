import React, { Component } from 'react';
import './login.css';
import logo from '../../img/logo.png';

import { connect } from 'react-redux';

import { Link, Redirect } from 'react-router-dom'
import { userLoginDefault } from '../../store/actions/authActions';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.userLoginDefault(this.state);
    }

    render() {

        return (
            <div id="loginContainer" className="gradient">
                <img id="loginLogo" src={logo} alt="Logo" />
                <form onSubmit={this.handleSubmit} id="loginForm">
                    <div id="loginFormWrapper">
                        <input id="username" name="email" className="loginInputField" type="text" onChange={this.handleChange} value={this.state.email} placeholder="Email" />
                        <input id="password" name="password" className="loginInputField" type="password" onChange={this.handleChange} value={this.state.password} placeholder="Password" />
                        <button id="loginBtn">Login</button>
                    </div>
                </form>
                <Link to='/profile/create'><p id="createAccount">Create Account</p></Link>
                <div>
                    { this.props.authError ? <p>Invalid Login</p> : null}
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchProps = (dispatch) => {
    return {
        userLoginDefault: (userCredentials) => dispatch(userLoginDefault(userCredentials)) // Username and password are passed from this.state
    }
}

export default connect(mapStateToProps, mapDispatchProps)(Login);

import React, { Component } from 'react';
import './login.css';
import logo from '../../img/logo.png';

class Login extends Component {
    render() {
        return (
            <div id="loginView">
                <img id="loginLogo" src={logo} alt="Logo" />
                <div id="loginInputField">
                    <input id="username" className="inputField" type="text" placeholder="Username" />
                    <input id="password" className="inputField" type="password" placeholder="Password" />
                    <div id="loginBtnBox" className="inputField">
                        <p id="loginBtn">Login</p>
                    </div>
                </div>
                <a href="" id="createAccount">Create Account</a>
            </div>
        );
    }
}

export default Login;

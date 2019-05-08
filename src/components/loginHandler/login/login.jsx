import React, { Component } from 'react';
import './login.css';
import logo from '../../../img/logo.png';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            createAccount: false
        };
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    submitLogin() {
        this.props.userLogin(this.state.username, this.state.password);
    }

    render() {
        return (
            <div id="loginView">
                <img id="loginLogo" src={logo} alt="Logo" />
                <div id="loginInputField">
                    <input id="username" name="username" className="inputField" type="text" onChange={this.handleChange} placeholder="Username" />
                    <input id="password" name="password" className="inputField" type="password" placeholder="Password" />
                    <div id="loginBtnBox" onClick={() => { this.submitLogin() }} className="inputField">
                        <p id="loginBtn">Login</p>
                    </div>
                </div>
                <a href="" id="createAccount">Create Account</a>
            </div>
        );
    }

}

export default Login;

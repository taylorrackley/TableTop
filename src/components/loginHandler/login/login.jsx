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

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    submitLogin = () => {
        this.props.userLogin(this.state.username, this.state.password);
    }

    userCreateAccount = () => {
        this.props.userCreateAccount(true);
    }

    render() {
        return (
            <div id="loginView">
                <img id="loginLogo" src={logo} alt="Logo" />
                <div id="loginInputField">
                    <input id="username" name="username" className="input-field" type="text" onChange={this.handleChange} placeholder="Username" />
                    <input id="password" name="password" className="input-field" type="password" placeholder="Password" />
                    <div id="login-btn-box" onClick={this.submitLogin} className="input-field">
                        <p id="loginBtn">Login</p>
                    </div>
                </div>
                <p id="createAccount" onClick={this.userCreateAccount}>Create Account</p>
            </div>
        );
    }

}

export default Login;

import React, { Component } from 'react';
import './login.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import logo from '../../img/logo.png';
import { userLogin } from '../../store/actions/accountActions';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
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
        this.props.userLogin(this.state);
        // this.props.userLogin(this.state.username, this.state.password);
    }

    render() {
        return (
            <div id="loginContainer" className="gradient">
                <img id="loginLogo" src={logo} alt="Logo" />
                <form onSubmit={this.handleSubmit} id="loginForm">
                    <div id="loginFormWrapper">
                        <input id="username" name="username" className="loginInputField" type="text" onChange={this.handleChange} placeholder="Username" />
                        <input id="password" name="password" className="loginInputField" type="password" onChange={this.handleChange} placeholder="Password" />
                        <button id="loginBtn">Login</button>
                    </div>
                </form>
                <Link to='/profile/create'><p id="createAccount">Create Account</p></Link>
            </div>
        );
    }

}

const mapDispatchProps = (dispatch) => {
    return {
        userLogin: (data) => dispatch(userLogin(data)) // Username and password are passed from this.state
    }
}

export default connect(null, mapDispatchProps)(Login);

import React, { Component } from 'react';
import Login from './login/login';
import CreateAccount from './createAccount/createAccount';

class LoginHandler extends Component {

    constructor(props) {
        super(props);
        this.state = {
            createAccount: false
        };
    }

    userCreateAccount = (value) => {
        // show user create account page
        this.setState({createAccount: value});
    }

    userLogin = (username, password) => {
        // Handle login bla bla
        this.props.userLogin(true);
    }

    render() {
        var loginView = this.state.createAccount ? <CreateAccount /> : <Login userLogin={this.userLogin} userCreateAccount={this.userCreateAccount} />;
        return (
            loginView
        );
    }
}

export default LoginHandler;

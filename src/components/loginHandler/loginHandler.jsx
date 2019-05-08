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
        //
        this.setState({createAccount: value});
    }

    userLogin = () => {

    }

    render() {
        var loginView = this.state.createAccount ? <CreateAccount /> : <Login userLogin={this.userLogin} userCreateAccount={this.userCreateAccount} />;
        return (
            <div className="App">
                {loginView}
            </div>
        );
    }
}

export default LoginHandler;

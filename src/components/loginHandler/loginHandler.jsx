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

    render() {
        var createAccount = this.state.createAccount ? <CreateAccount /> : <Login userLogin={this.props.userLogin} />;
        return (
            <div className="App">
                {createAccount}
            </div>
        );
    }
}

export default CreateAccount;

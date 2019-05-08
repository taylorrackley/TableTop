import React from 'react';
import Login from './components/login/login'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: false,
            createAccount: false;
        };
    }

    render() {
        var login = this.state.isAuthenticated ? '' : <Login userLogin = {this.userLogin} />;
        return (
            <div className="App">
                {login}
            </div>
        );
    }

    userLogin = () => {
      // Do login stuff bla bla bla
      // User is authenticated
      this.setState({isAuthenticated: true});
    }

    createAccount = () => {
      this.setState({createAccount: true});
    }
}

export default App;

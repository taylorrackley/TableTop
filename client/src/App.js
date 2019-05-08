import React from 'react';
import Login from './components/login/login';
import HomePage from './components/homePage/homePage';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: false,
            createAccount: false;
        };
    }

    render() {
        var userLogin = this.state.login ? <HomePage /> : <Login />;
        return (
            <div className="App">
                {userLogin}
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

import React from 'react';
import LoginHandler from './components/loginHandler/loginHandler';
import HomePage from './components/homePage/homePage';
import NFCReader from './components/nfcReader/nfcReader';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: false
        };
    }

    userLogin = (value) => {
      // User is authenticated
      this.setState({isAuthenticated: value});
    }

    render() {
        var userView = this.state.isAuthenticated ? <HomePage /> : <LoginHandler userLogin={this.userLogin} />;
        return (
            // userView
            <NFCReader />
        );
    }

}

export default App;

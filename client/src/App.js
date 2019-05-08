import React from 'react';
import Login from './components/login/login';
import HomePage from './components/homePage/homePage';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: false
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

    userLogin() {
        this.setState({login: true});
    }
}

export default App;

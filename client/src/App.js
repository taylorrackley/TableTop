import React from 'react';
import Login from './components/login/login'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: false
        };
    }

    render() {
        var login = this.state.login ? '' : <Login />;
        return (
            <div className="App">
                {login}
            </div>
        );
    }

    userLogin() {
        this.setState({login: true});
    }
}

export default App;

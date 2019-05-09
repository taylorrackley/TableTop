import React from 'react';
import LoginHandler from './components/loginHandler/loginHandler';
import HomePage from './components/homePage/homePage';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: false
        };
    }

    userLogin = (value) => {
      // Do login stuff bla bla bla
      // User is authenticated
      this.setState({isAuthenticated: value});
    }

    render() {
        var userView = this.state.isAuthenticated ? <HomePage /> : <LoginHandler userLogin={this.userLogin} />;
        return (
            <div className="App">
                {userView}
            </div>
        );
    }

}

export default App;

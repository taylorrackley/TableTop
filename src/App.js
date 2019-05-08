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

    render() {
        var userView = this.state.isAuthenticated ? <HomePage /> : <LoginHandler userLogin={this.props.userLogin} />;
        return (
            <div className="App">
                {userView}
            </div>
        );
    }

    userLogin = (username, password) => {
      // Do login stuff bla bla bla
      // User is authenticated
      this.setState({isAuthenticated: true});
    }

}

export default App;

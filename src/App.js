import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ViewTab from './components/viewTab/viewTab';
import Login from './components/login/login';
import NFCReader from './components/nfcReader/nfcReader';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: false,
            nfcCodeSubmitted: false,
            nfcTabCode: null
        };
    }

    userLogin = (value) => {
      // User is authenticated
      this.setState({isAuthenticated: value});
    }

    viewCurrentTab = (code) => {
        this.setState({nfcTabCode: code});
        this.setState({nfcCodeSubmitted: true});
    }

    payCurrentTab = () => {

    }

    render() {
        //var userView = this.state.isAuthenticated ? <HomePage /> : <LoginHandler userLogin={this.userLogin} />;
        var getTabID = this.state.nfcCodeSubmitted ? <ViewTab isAuthenticated={this.state.isAuthenticated} /> : <NFCReader viewTab={this.viewCurrentTab} />;

        return (
            <Router>
                <Route path='/' exact component={NFCReader} />
                <Route path='/login' exact component={Login} />
            </Router>
        );
    }

}

export default App;

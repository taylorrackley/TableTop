import React from 'react';
import LoginHandler from './components/loginHandler/loginHandler';
import ViewTab from './components/viewTab/viewTab';
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
        console.log("Switch view to current tab");
        this.setState({nfcTabCode: code});
        this.setState({nfcCodeSubmitted: true});
    }

    render() {
        //var userView = this.state.isAuthenticated ? <HomePage /> : <LoginHandler userLogin={this.userLogin} />;
        var getNFC = this.state.nfcCodeSubmitted ? <ViewTab isAuthenticated={this.state.isAuthenticated} /> : <NFCReader viewTab={this.viewCurrentTab}/>;
        return (
            <div id="appContainer">
                {getNFC}
            </div>
        );
    }

}

export default App;

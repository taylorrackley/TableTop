import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import NFCReader from './components/nfcReader/nfcReader';
import Login from './components/login/login';
import ViewTab from './components/viewTab/viewTab';
import EditProfile from './components/profile/editProfile/editProfile';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from 'redux';
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

const routing = (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path='/' exact component={NFCReader} />
                <Route path='/login' exact component={Login} />
                <Route path='/tab/view' exact component={ViewTab} />
                <Route path='/profile/edit' exact component={EditProfile} />
            </Switch>
        </Router>
    </Provider>
);

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();

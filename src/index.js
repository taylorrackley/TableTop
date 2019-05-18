import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './components/login/login';
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
            <Route path='/' exact component={App} />
            <Route path='/login' exact component={Login} />
        </Router>
    </Provider>
);

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();

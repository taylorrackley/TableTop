import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';

// Import components
import NFCReader from './components/nfcReader/nfcReader';
import Login from './components/login/login';
import ViewTab from './components/viewTab/viewTab';
import PayTab from './components/payTab/payTab';
import EditProfile from './components/profile/editProfile/editProfile';

// Import React Router
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// Import Redux and Thunk
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

// Import Firebase
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import firebaseConfig from './config/fb.config';
import CreateProfile from './components/profile/createProfile/createProfile';

const store = createStore(rootReducer, 
    compose (
        applyMiddleware( thunk.withExtraArgument({getFirebase, getFirestore})),
        reduxFirestore(firebaseConfig),
        reactReduxFirebase(firebaseConfig, {useFirestoreForProfile: true, userProfile: 'users', attachAuthIsReady: true})
    )
);

const routing = (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path='/' exact component={NFCReader} />
                <Route path='/login' exact component={Login} />
                <Route path='/tab/view' exact component={ViewTab} />
                <Route path='/tab/pay' excact component={PayTab} />
                <Route path='/profile/edit' exact component={EditProfile} />
                <Route path='/profile/create' exact component={CreateProfile} />
            </Switch>
        </Router>
    </Provider>
);

store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(routing, document.getElementById('root'));
    serviceWorker.unregister();
});

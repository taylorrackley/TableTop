import authReducer from './authReducer';
import surveyReducer from './surveyReducer';
import tabReducer from './tabReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth: authReducer,
    survey: surveyReducer,
    tab: tabReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;

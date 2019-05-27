import authReducer from './authReducer';
import surveyReducer from './surveyReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth: authReducer,
    survey: surveyReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;

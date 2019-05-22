import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS, LOGOUT_FAILURE } from './types';

export const userLoginDefault = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({type: LOGIN_SUCCESS});
        }).catch((error) => {
            dispatch({type: LOGIN_FAILURE, error});
        });

    }
};

export const userLogout = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({type: LOGOUT_SUCCESS});
        }).catch((error) => {
            dispatch({type: LOGOUT_FAILURE});
        });
    }
}
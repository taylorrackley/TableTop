import { LOGIN_SUCCESS, LOGIN_FAILURE,
    LOGOUT_SUCCESS, LOGOUT_FAILURE,
    USER_SIGNUP_SUCCESS, USER_SIGNUP_FAILURE,
    USER_UPDATE_SUCCESS, USER_UPDATE_FAILURE } from './types';

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

    };
};

export const userLoginGoogle = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.login({
            provider: 'google',
            type: 'popup'
        }).then(() => {
            dispatch({type: LOGIN_SUCCESS});
        }).catch((error) => {
            dispatch({type: LOGIN_FAILURE, error});
        });
    }
}

export const userLogout = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({type: LOGOUT_SUCCESS});
        }).catch((error) => {
            dispatch({type: LOGOUT_FAILURE});
        });
    };
}

export const userSignUpDefault = (newUser) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((response) => {
            return firestore.collection('users').doc(response.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                date_of_birth: newUser.dob,
                address: newUser.address,
                city: newUser.city,
                state: newUser.state,
                zip: newUser.zip
            });
        }).then(() => {
            dispatch({type: USER_SIGNUP_SUCCESS});
        }).catch(error => {
            dispatch({type: USER_SIGNUP_FAILURE});
        });

    };
}

export const userUpdate = (profile) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        // profile = JSON.parse( JSON.stringify(profile) ) remove null values

        firestore.collection('users').doc(firebase.auth().currentUser.uid).set({
            first_name: profile.first_name,
            last_name: profile.last_name,
            date_of_birth: profile.date_of_birth,
            address: profile.address,
            city: profile.city,
            state: profile.state,
            zip: profile.zip
        }).then(() => {
            dispatch({type: USER_UPDATE_SUCCESS});
        }).catch(error => {
            dispatch({type: USER_UPDATE_FAILURE});
        });

    };
}
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS, LOGOUT_FAILURE, USER_SIGNUP_SUCCESS, USER_SIGNUP_FAILURE } from './types';

export const userUpdateProfile = () => {
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
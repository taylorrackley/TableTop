import { USER_CARD_UPDATED, USER_CARD_UPDATE_FAILED,
    GET_USER_CARD_SUCCESS, GET_USER_CARD_FAILURE } from './types';

export const getUserCard = () => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        console.log('GET CARD');
        firestore.collection('users').doc(firebase.auth().currentUser.uid).get().then((snapshot) => {
            let user = snapshot.docs[0].data();
            console.log('USER: '+snapshot);
            let card = {
                cc_number: user.cc_number,
                cc_pin: user.cc_pin,
                cc_expire: user.cc_expire,
                cc_name: user.cc_name
            };
            dispatch({type: GET_USER_CARD_SUCCESS,  card});
        }).catch((error) => {
            dispatch({type: GET_USER_CARD_FAILURE, error});
        });

    };
}

export const userCardUpdate = (card) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firestore.collection('users').doc(firebase.auth().currentUser.uid).update({
            cc_number: card.cc_number,
            cc_pin: card.cc_pin,
            cc_expire: card.cc_expire,
            cc_name: card.cc_name
        }).then(() => {
            dispatch({ type: USER_CARD_UPDATED });
        }).catch(error => {
            dispatch({ type: USER_CARD_UPDATE_FAILED });
        });

    };
}
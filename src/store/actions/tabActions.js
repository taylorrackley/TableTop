import { GET_CUSTOMER_TAB, GET_CUSTOMER_TAB_FAILED } from './types';

export const findTabWithPin = (pin) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('tabs').where('pin', '==', parseInt(pin)).get()
        .then((snapshot) => {
            let tab = snapshot.docs[0].data()
            dispatch({type: GET_CUSTOMER_TAB,  tab});
        }).catch((error) => {
            dispatch({type: GET_CUSTOMER_TAB_FAILED, error});
        });

    };
};
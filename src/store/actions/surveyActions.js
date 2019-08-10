import { SUBMIT_CUSTOMER_SURVEY, SUBMIT_CUSTOMER_SURVEY_FAILED } from './types';

export const customerSubmitSurveyWithoutComments = (survey) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        const userID = getState().firebase.auth.uid;

        firestore.collection('survey_responses').add({
            responses: survey,
            user_id: userID,
            created_at: new Date()
        }).then(() => {
            dispatch({type: SUBMIT_CUSTOMER_SURVEY, survey});
        }).catch((error) => {
            dispatch({type: SUBMIT_CUSTOMER_SURVEY_FAILED, error});
        });

    };
};

export const customerSubmitSurveyWithComments = (survey) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        const userID = getState().firebase.auth.uid;

        firestore.collection('survey_responses').add({
            responses: survey.responses,
            customer_comments: survey.comments,
            user_id: userID,
            survey_id: 'test2', // This needs to access state and get current survey id
            created_at: new Date()
        }).then(() => {
            dispatch({type: SUBMIT_CUSTOMER_SURVEY, survey});
        }).catch((error) => {
            dispatch({type: SUBMIT_CUSTOMER_SURVEY_FAILED, error});
        });

    };
};
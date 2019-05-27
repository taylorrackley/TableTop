import { SUBMIT_CUSTOMER_SURVEY, SUBMIT_CUSTOMER_SURVEY_FAILED } from "../actions/types";

const initState = {
};

const surveyReducer = (state = initState, action) => {
    switch(action.type) {
        case SUBMIT_CUSTOMER_SURVEY:
            console.log('Submitted Survey', action.survey);
            return state;
        case SUBMIT_CUSTOMER_SURVEY_FAILED:
            console.log('Failed to Submit Survey', action.error);
            return state;
        default:
            return state;
    }
};

export default surveyReducer;
import { USER_CARD_UPDATED, USER_CARD_UPDATE_FAILED } from "../actions/types";

const initState = {
    card: ''
};

const creditCardReducer = (state = initState, action) => {
    switch(action.type) {
        case USER_CARD_UPDATED:
            console.log(action);
            console.log('Card Updated', action.card);
            return {
                ...state,
                card: action.card
            };
        case USER_CARD_UPDATE_FAILED:
            console.log('Failed to update card', action.error);
            return state;
        default:
            return state;
    }
};

export default creditCardReducer;
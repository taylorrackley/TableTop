import { GET_CUSTOMER_TAB, GET_CUSTOMER_TAB_FAILED } from "../actions/types";

const initState = {
    tab: ''
};

const tabReducer = (state = initState, action) => {
    switch(action.type) {
        case GET_CUSTOMER_TAB:
            console.log('Retrieved Customer Tab', action.tab);
            return {
                ...state,
                tab: action.tab
            };
        case GET_CUSTOMER_TAB_FAILED:
            console.log('Failed to Retrieve Customer Tab', action.error);
            return state;
        default:
            return state;
    }
};

export default tabReducer;
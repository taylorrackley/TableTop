import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_FAILURE, LOGOUT_SUCCESS } from '../actions/types';

const initState = {
    authError: null
};

const authReducer = (state = initState, action) => {
    switch(action.type) {
        case LOGIN_FAILURE:
            console.log('Login Failed');
            return {
                ...state,
                authError: LOGIN_FAILURE
            };
        case LOGIN_SUCCESS:
            console.log('Login Success');
            return {
                ...state,
                authError: null
            };
        case LOGOUT_FAILURE:
            console.log('Logout Failed');
            return {
                ...state,
                authError: LOGOUT_FAILURE
            };
        case LOGOUT_SUCCESS:
            console.log('Logout Success');
            return state;
        default:
            return state;
    }
}

export default authReducer;

import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_FAILURE, LOGOUT_SUCCESS, USER_SIGNUP_SUCCESS, USER_SIGNUP_FAILURE } from '../actions/types';

const initState = {
    authError: null,
};

const authReducer = (state = initState, action) => {
    switch(action.type) {
        case LOGIN_FAILURE:
            console.log(LOGIN_FAILURE);
            return {
                ...state,
                authError: LOGIN_FAILURE
            };
        case LOGIN_SUCCESS:
            console.log(LOGIN_SUCCESS);
            return {
                ...state,
                authError: null
            };
        case LOGOUT_FAILURE:
            console.log(LOGOUT_FAILURE);
            return {
                ...state,
                authError: LOGOUT_FAILURE
            };
        case LOGOUT_SUCCESS:
            console.log(LOGOUT_SUCCESS);
            return {
                ...state,
                userLoggedIn: false,
            };
        case USER_SIGNUP_SUCCESS:
            console.log(USER_SIGNUP_SUCCESS);
            return {
                ...state,
                authError: null
            }
        case USER_SIGNUP_FAILURE:
            console.log(USER_SIGNUP_FAILURE);
            return {
                ...state,
                authError: USER_SIGNUP_FAILURE
            }
        default:
            return state;
    }
}

export default authReducer;

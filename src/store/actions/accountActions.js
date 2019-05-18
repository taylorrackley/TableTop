import { LOGIN } from './types';

export const userLogin = (data) => {
    return (dispatch, getState) => {
        // confirm login with database
        // return async data
        dispatch({type: LOGIN, data});
    }
};

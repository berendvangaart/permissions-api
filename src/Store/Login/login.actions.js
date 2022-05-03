import {LOGIN, LOGOUT} from "./login.types";

export const signIn = (credentials) => {
    return {
        type: LOGIN,
        payload: credentials
    };
};

export const logOut = () => {
    return {
        type: LOGOUT,
        payload: ''
    };
};

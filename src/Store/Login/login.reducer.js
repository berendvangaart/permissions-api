import {LOGIN, LOGOUT} from "./login.types";

const INITIAL_STATE = {
    role: null,
    email: '',
    loginSucces: false,
    wrongCredentials: false
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case LOGIN:
            return {
                ...state,
            };
        case LOGOUT:
            return {
                ...state,
            };
        default:
            return state;
    }
};

export default reducer;

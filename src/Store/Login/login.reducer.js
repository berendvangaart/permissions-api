import {LOGIN, LOGOUT} from "./login.types";

const INITIAL_STATE = {
    token : null,
    user: null,
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                token: action.payload.token,
                user: action.payload.user
            };
        case LOGOUT:
            return {
                INITIAL_STATE
            };
        default:
            return state;
    }
};

export default reducer;

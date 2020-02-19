import { RECEIVE_ERRORS } from "../actions/error_actions";
import { RECEIVE_USER } from "../actions/user_actions";

const errorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ERRORS:
            return action.errors;
        case RECEIVE_USER:
            return [];
        default:
            return state;
    }
}

export default errorsReducer;
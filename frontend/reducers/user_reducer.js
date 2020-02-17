import { RECEIVE_USER } from "../actions/user_actions";

const userReducer = (state = null, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_USER:
            const { user } = action.payload;
            return user;
        default:
            return state;
    }
}

export default userReducer;
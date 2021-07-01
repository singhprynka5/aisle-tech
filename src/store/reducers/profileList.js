import {
    FETCH_PROFILE_SUCCESS,
    FETCH_PROFILE_FAILED
} from "../actions/actionType";

const initialState = {};

const profileList = (state = initialState, action = {}) => {
    switch (action.type) {
        case FETCH_PROFILE_SUCCESS:
            return { ...state, ...action.payload };
        case FETCH_PROFILE_FAILED:
            return { ...state, ...initialState };
        default:
            return state;
    }
};

export default profileList;

import {
    UPDATE_USERDATA, RESET_USERDATA,
    UPDATE_PROFILE, ADD_REQUEST,
    DELETE_REQUEST, ADD_FRIEND
} from '../actions/actionTypes'
const initial = {}

const userDataReducer = (state = initial, action) => {
    switch (action.type) {
        case UPDATE_USERDATA:
            return action.payload
        case RESET_USERDATA:
            return initial
        case ADD_REQUEST:
            state.friendReqPanding = [action.payload, ...state.friendReqPanding]
            return state
        case DELETE_REQUEST:
            state.friendReqPanding = state.friendReqPanding.filter(f => f != action.payload)
            return state
        case UPDATE_PROFILE:
            return { ...state, profilePic: action.payload }
        default: return state
    }
}

export default userDataReducer
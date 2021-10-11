import {
    UPDATE_USERDATA, RESET_USERDATA,
    UPDATE_PROFILE, ADD_REQUEST,
    DELETE_REQUEST, ADD_FRIEND
} from './actionTypes'


export const updateUserData = (payload) => {
    return {
        type: UPDATE_USERDATA,
        payload: payload
    }
}

export const resetUserData = () => {
    return {
        type: RESET_USERDATA,
    }
}

export const updateProfile = (uri) => {
    return {
        type: UPDATE_PROFILE,
        payload: uri
    }
}


export const addRequest = (id) => {
    return {
        type: ADD_REQUEST,
        payload: id
    }
}

export const deleteRequest = (id) => {
    return {
        type: DELETE_REQUEST,
        payload: id
    }
}

export const addFriend = (id) => {
    return {
        payload: ADD_FRIEND,
        payload: id
    }
}
import { ADD_CONVERSATION, RESET_CONVERSATAION, ADD_NEW_MESSAGE } from './actionTypes'

export const addConversation = (payload) => {
    return {
        type: ADD_CONVERSATION,
        payload: payload
    }
}
export const resetConversation = () => {
    return {
        type: RESET_CONVERSATAION,
    }
}

export const addNewMessage = (payload) => {

    return {
        type: ADD_NEW_MESSAGE,
        payload: payload
    }
}


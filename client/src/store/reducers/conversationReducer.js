import { ADD_CONVERSATION, RESET_CONVERSATAION, ADD_NEW_MESSAGE } from '../actions/actionTypes'

const initial = []

const conversationReducer = (state = initial, action) => {
    switch (action.type) {
        case ADD_CONVERSATION:
            return [action.payload, ...state]

        case ADD_NEW_MESSAGE:
            return state.filter(conver => {
                if (conver.id === action.payload.id) {
                    conver.data.messages = [...conver.data.messages, action.payload.message]
                    conver.data.length = conver.data.length + 1
                    return conver
                } else {
                    return conver
                }
            })
        case RESET_CONVERSATAION:
            return initial
        default: return state
    }
}

export default conversationReducer
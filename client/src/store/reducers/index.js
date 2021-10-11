import { combineReducers } from 'redux'
import userReducer from './userReducer'
import conversationReducer from './conversationReducer'
import userDataReducer from './userDataReducer'

const rootReducer = combineReducers({
    user: userReducer,
    conversation: conversationReducer,
    userData: userDataReducer
})

export default rootReducer
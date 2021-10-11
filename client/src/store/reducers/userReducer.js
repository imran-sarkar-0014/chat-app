import { UPDATE_USER } from '../actions/actionTypes'

const initial = ''

const userReducer = (state = initial, action) => {
    switch (action.type) {
        case UPDATE_USER:
            return action.payload
        default: return state
    }
}

export default userReducer
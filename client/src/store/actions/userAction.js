import { UPDATE_USER } from './actionTypes'

export const updateUser = (user) => {
    return {
        type: UPDATE_USER,
        payload: user
    }
}
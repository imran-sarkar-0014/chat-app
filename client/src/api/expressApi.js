import axios from "axios";

////local url
// const baseUrl = 'http://192.168.0.105:5000'

const baseUrl = ''

axios.defaults.baseURL = `${baseUrl}/api/`;
// axios.defaults.baseURL = '/api/';

const getBaseUrl = () => {
    return baseUrl
}

const changeUser = (authToken) => {
    axios.defaults.headers.common['Authorization'] = `token ${authToken}`
}

const login = async (data, callback) => {

    try {
        const result = await axios.post('/auth/login', {
            email: data.email,
            password: data.password
        })
        callback(result)
    } catch (err) {
        const result = {}
        result.hasError = true
        callback(result)
    }
}

const register = async (data, callback) => {
    try {
        const result = await axios.post('/auth/register', {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: data.password
        })
        callback(result)
    } catch (err) {
        const result = {}
        result.hasError = true
        callback(result)
    }
}

const getThisUser = async (callback) => {
    try {
        const result = await axios.get('/users')
        callback(result.data)
    } catch (err) {
        console.log(err)
    }
}

const getUser = async (id, callback) => {
    try {
        const result = await axios.get(`/users/${id}`)
        callback(result.data)
    } catch (err) {
        console.log(err)
    }
}

const getConversationInfo = async (id, callback) => {
    try {
        const result = await axios.get(`/conversations/${id}`)
        callback(result.data)
    } catch (err) {
        console.log(err)
    }
}

const getConversationMessage = async (id, callback) => {
    try {
        const result = await axios.get(`/conversations/message/${id}`)
        callback(result.data)
    } catch (err) {
        console.log(err)
    }
}



// accept friend request
const acceptFriendRequest = async (id, callback) => {
    try {
        const result = await axios.post(`/users/acceptRequest/${id}`, {})
        callback(result.data)
    } catch (err) {
        console.log(err)
    }
}

// reject friend request
const rejectRequest = async (id, callback) => {
    try {
        const result = await axios.delete(`/users/rejectRequest/${id}`, {})
        callback(result.data)
    } catch (err) {
        console.log(err)
    }
}

// send a message to a conversation
const sendMessage = async ({ id, message }, callback) => {
    try {
        const result = await axios.post(`/conversations/message`, {
            conversationId: id,
            message: message
        })
        callback(result.data)
    } catch (err) {
        console.log(err)
    }
}

// search users
const search = async (keyword, callback) => {
    try {
        const result = await axios.get(`/users/search/${keyword}`)
        callback(result.data)
    } catch (err) {
        console.log(err)
    }
}

// send friend request
const sendFriendRequest = async (id, callback) => {
    try {
        const result = await axios.post(`/users/friendRequest/${id}`, {})
        callback(result.data)
    } catch (err) {
        console.log(err)
    }
}

// delete sent request
const deleteFriendRequest = async (id, callback) => {
    try {
        const result = await axios.delete(`users/friendRequest/${id}`, {})
        callback(result.data)
    } catch (err) {
        console.log(err)
    }
}


const uploadProfile = async (file, callback) => {
    try {

        const formData = new FormData()
        formData.append('profilePic', file, file.name)
        const result = await axios.post('/uploads/profile', formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })

        callback(result.data)

    } catch (err) {
        console.log(err)
    }
}

export {
    getBaseUrl,
    changeUser,
    login,
    register,
    getThisUser,
    getUser,
    getConversationInfo,
    getConversationMessage,
    acceptFriendRequest,
    rejectRequest,
    sendMessage,
    search,
    sendFriendRequest,
    deleteFriendRequest,
    uploadProfile
}
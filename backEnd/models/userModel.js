const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String
    },
    username: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profilePic: {
        type: String,
        default: ''
    },
    friends: {
        type: Array,
        default: []
    },
    friendReq: {
        type: Array,
        default: []
    },
    friendReqPending: {
        type: Array,
        default: []
    },
    conversations: {
        type: Array,
        default: []
    }
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model('users', userSchema);
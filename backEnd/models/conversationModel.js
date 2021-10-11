const mongoose = require('mongoose')
const { Schema } = mongoose;

const conversationSchema = new Schema({
    user1: {
        type: String,
        required: true
    },
    user2: {
        type: String,
        required: true
    },
    numberOfMessage: {
        type: Number,
        default: 0
    }
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model('conversations', conversationSchema);
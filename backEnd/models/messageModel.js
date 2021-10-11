const mongoose = require('mongoose')
const { Schema } = mongoose;

const messageSchema = new Schema({
    conversationId: {
        type: String,
        required: true
    },
    sender: {
        type: String,
        required: true
    },
    message: {
        type: String,
    }
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model('messages', messageSchema);
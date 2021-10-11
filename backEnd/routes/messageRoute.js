const express = require('express')
const router = express.Router()
const Conversations = require('../models/conversationModel')
const Message = require('../models/messageModel')
const authMiddleware = require('../middleware/authMiddleware')

router.use(authMiddleware)

// get a range of a conversation messages of a conversation
router.get('/:CId', async (req, res) => {
    try {

    } catch (err) {
        res.status(500).json(err)
    }
})

// add a new message to a converstaion
router.post('/:CId', async (req, res) => {
    try {

    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router
const express = require('express')
const router = express.Router()
const Conversations = require('../models/conversationModel')
const Message = require('../models/messageModel')
const Users = require('../models/userModel')
const authMiddleware = require('../middleware/authMiddleware')

router.use(authMiddleware)

router.get('/:id', async (req, res) => {
    try {
        const conversation = await Conversations.findOne({ _id: req.params.id })
        if (conversation)
            return res.json(conversation)
        else
            return res.status(404).json('not found')

    } catch (err) {
        res.status(500).json(err)
    }
})


// add a message associate with conversation id
router.post('/message', async (req, res) => {

    try {
        const conversation = await Conversations.findOne({ _id: req.body.conversationId })
        if (conversation === null)
            return res.status(404).json('conversation not found.')

        const mess = await new Message({
            conversationId: req.body.conversationId,
            sender: req.userId,
            message: req.body.message
        })

        const m_result = await mess.save()
        conversation.numberOfMessage = conversation.numberOfMessage + 1
        conversation.lastMessage = req.body.message
        await conversation.save()

        return res.json(m_result)

    } catch (err) {
        return res.status(500).json(err)
    }
})

// get message by conversation ids

// add a message associate with conversation id
router.get('/message/:conversationId', async (req, res) => {
    try {
        const user = await Users.findOne({ _id: req.userId })
        if (user === null)
            return res.status(403).json('user forbidden.')



        const found = user.conversations.find(cid => String(cid) === req.params.conversationId)

        if (!found)
            return res.status(403).json('user forbidden.')

        const messages = await Message.find({
            conversationId: req.params.conversationId
        })

        res.json({
            length: messages.length,
            messages: messages
        })

    } catch (err) {
        return res.status(500).json(err)
    }

})



module.exports = router
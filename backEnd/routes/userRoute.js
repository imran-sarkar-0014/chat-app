const express = require('express')
const router = express.Router()
const Users = require('../models/userModel')
const Conversations = require('../models/conversationModel')
const authMiddleware = require('../middleware/authMiddleware')

router.use(authMiddleware)


// get user informations by token
router.get('/', async (req, res) => {
    try {
        const user = await Users.findOne({ _id: req.userId }, {
            firstName: 1,
            lastName: 1,
            username: 1,
            email: 1,
            profilePic: 1,
            friends: 1,
            friendReq: 1,
            friendReqPending: 1,
            conversations: 1,
        })

        if (user)
            return res.json(user)
        else
            return res.status(403).json('user not exists')

    } catch (err) {
        res.status(500).json(err)
    }
})

// get some user information by user id
router.get('/:userId', async (req, res) => {
    try {
        const user = await Users.findOne({ _id: req.params.userId },
            {
                username: 1,
                profilePic: 1
            })

        if (user)
            return res.json(user)
        else
            return res.status(403).json('user not exists')

    } catch (err) {
        res.status(500).json(err)
    }

})

// search by name
router.get('/search/:search', async (req, res) => {
    try {

        const result = await Users.find({
            username: { $regex: req.params.search, $options: 'i' }
        }, {
            username: 1,
            profilePic: 1
        })

        if (result)
            return res.json(result)
        else
            return res.status(403).json('user not exists')

    } catch (err) {
        res.status(500).json(err)
    }
})

// send friend request
router.post('/friendRequest/:id', async (req, res) => {
    try {
        const user = await Users.findOne({ _id: req.userId })
        const targetUser = await Users.findOne({ _id: req.params.id })

        if (!user || !targetUser)
            return res.status(404).json('user not exists')

        user.friendReqPending = [...new Set([req.params.id, ...user.friendReqPending])]
        targetUser.friendReq = [...new Set([req.userId, ...targetUser.friendReq])]

        await user.save()
        await targetUser.save()

        res.json(targetUser._id)

    } catch (err) {
        res.status(500).json(err)
    }
})


// delete friend request
router.delete('/friendRequest/:id', async (req, res) => {
    try {
        const user = await Users.findOne({ _id: req.userId })
        const targetUser = await Users.findOne({ _id: req.params.id })

        if (!user || !targetUser)
            return res.status(404).json('user not exists')

        user.friendReqPending = user.friendReqPending.filter(uid => uid !== req.params.id)
        targetUser.friendReq = targetUser.friendReq.filter(uid => uid !== req.userId)

        await user.save()
        await targetUser.save()

        return res.status(200).json(targetUser._id)

    } catch (err) {
        res.status(500).json(err)
    }
})

// Reject friend request
router.delete('/rejectRequest/:id', async (req, res) => {

    try {
        const user = await Users.findOne({ _id: req.userId })
        const targetUser = await Users.findOne({ _id: req.params.id })



        if (!user || !targetUser)
            return res.status(404).json('user not exists')

        const found = user.friendReq.find(uid => uid === req.params.id);
        if (!found)
            return res.status(404).json('user not found')

        user.friendReq = user.friendReq.filter(uid => uid !== req.params.id)
        targetUser.friendReqPending = targetUser.friendReqPending.filter(uid => uid !== req.userId)

        await user.save()
        await targetUser.save()

        res.json(targetUser._id)

    } catch (err) {
        res.status(500).json(err)
    }
})


// Accept friend request
router.post('/acceptRequest/:id', async (req, res) => {

    try {
        const user = await Users.findOne({ _id: req.userId })
        const targetUser = await Users.findOne({ _id: req.params.id })



        if (!user || !targetUser)
            return res.status(404).json('user not exists')

        const found = user.friendReq.find(uid => uid === req.params.id);
        if (!found)
            return res.status(404).json('user not found')

        user.friendReq = user.friendReq.filter(uid => uid !== req.params.id)
        user.friends = [...new Set([req.params.id, ...user.friends])]



        targetUser.friendReqPending = targetUser.friendReqPending.filter(uid => uid !== req.userId)
        targetUser.friends = [...new Set([req.userId, ...targetUser.friends])]



        const newConversation = await new Conversations({
            user1: req.userId,
            user2: req.params.id,
            numberOfMessage: 0,
            lastMessage: 'You are now friends...'
        })

        const result = await newConversation.save()

        user.conversations = [...new Set([result._id, ...user.conversations])]
        targetUser.conversations = [...new Set([result._id, ...targetUser.conversations])]

        await user.save()
        await targetUser.save()

        res.json({
            friend: targetUser._id,
            conversation: result._id
        })

    } catch (err) {
        res.status(500).json(err)
    }
})




module.exports = router
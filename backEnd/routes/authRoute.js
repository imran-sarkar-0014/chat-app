const express = require('express')
const router = express.Router()
const Users = require('../models/userModel')
const jwt = require('jsonwebtoken')
const authMiddleware = require('../middleware/authMiddleware')


//regisert
router.post('/register', async (req, res) => {
    try {
        const user = await new Users({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            username: `${req.body.firstName} ${req.body.lastName}`,
            email: req.body.email,
            password: req.body.password
        })
        const result = await user.save()

        const token = jwt.sign({ userId: result._id }, process.env.JWTSCRET)

        return res.json(token)
    } catch (err) {
        return res.status(500).json(err)
    }
})


//login
router.post('/login', async (req, res) => {
    try {
        const user = await Users.findOne({
            email: req.body.email
        })

        if (user === null)
            return res.status(404).json('wrong email')
        if (user.password !== req.body.password)
            return res.status(404).json('wrong Password')
        const token = jwt.sign({ userId: user._id }, process.env.JWTSCRET)

        return res.json(token)
    } catch (err) {
        return res.status(500).json(err)
    }
})



module.exports = router
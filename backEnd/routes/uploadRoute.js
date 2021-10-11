const express = require('express')
const router = express.Router()
const Users = require('../models/userModel')
const authMiddleware = require('../middleware/authMiddleware')
const multer = require('multer')
const path = require('path')


router.use(authMiddleware)


const UPLOAD_FOLDER = path.join(__dirname, '..', '..', 'uploads')

// multer storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, UPLOAD_FOLDER)
    },
    filename: (req, file, cb) => {
        const fileExtention = path.extname(file.originalname)
        const filename = Date.now().toString()
        cb(null, filename + fileExtention)
    }

})

//  multer options
const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (
            file.mimetype === 'image/png' ||
            file.mimetype === 'image/jpg' ||
            file.mimetype === 'image/jpeg'
        ) {
            cb(null, true)
        }
        cb(null, false)
    }
})


router.post('/profile', upload.single('profilePic'), async (req, res) => {
    try {

        const user = await Users.findOne({ _id: req.userId })
        user.profilePic = req.file.filename
        await user.save()

        return res.json(req.file.filename)

    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router
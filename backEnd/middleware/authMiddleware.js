const JWT = require('jsonwebtoken')

const authenticated = async (req, res, next) => {
    const auth = req.headers['authorization']

    if (auth != undefined) {
        try {
            const bearerToken = auth.split(' ')
            const token = bearerToken[1]
            const uid = await JWT.verify(token, process.env.JWTSCRET)
            req.userId = uid.userId
            next()
        } catch (err) {
            return res.status(403).json(err)
        }

    }
    else
        return res.status(403).json('forbidden')
}

module.exports = authenticated
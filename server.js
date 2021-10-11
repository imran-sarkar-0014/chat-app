require('dotenv').config()

// import server and database libraries
const express = require('express')
const app = express()
const Server = require('http').Server(app)
const io = require('socket.io')(Server, {
    cors: {
        origin: '*'
    }
})

const cors = require('cors')
const mongoose = require('mongoose')
const path = require('path')
const morgan = require('morgan')

// some middlewares

// cors middleware to access api from outside of this host
app.use(cors({
    origin: '*'
}))

// body parser
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

//using morgan to console log the requests and it's responds
app.use(morgan('tiny'))

// database connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/chatapp').then(res => {
    console.log('database connected')
}).catch(err => {
    console.log(err)
})

// importing Routers 
const authRoute = require('./backEnd/routes/authRoute')
const conversationRoute = require('./backEnd/routes/conversationRoute')
const userRoute = require('./backEnd/routes/userRoute')
const uploadRoute = require('./backEnd/routes/uploadRoute')

app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/conversations', conversationRoute)
app.use('/api/uploads', uploadRoute)

// using uploads folder as static directory
const UPLOADS = path.resolve(__dirname, 'uploads')
app.use(express.static(UPLOADS))


// static files
const staticPath = path.resolve(__dirname, 'client', 'build')
app.use('/', express.static(staticPath))
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})



//// socket io connections 

const onlineIds = new Map()
const onlineUsers = new Map()


const removeSocket = (id) => {
    const user = onlineIds.get(id)

    if (user) {
        let userSockets = onlineUsers.get(user)

        if (userSockets) {

            userSockets = userSockets.filter(soc => soc !== id)

            if (userSockets === [])
                onlineUsers.delete(user)
            else
                onlineUsers.set(user, userSockets)
        }
    }
    onlineIds.delete(id)
}


io.on('connection', socket => {

    socket.on('open', id => {

        const hasUser = onlineUsers.get(id)
        if (!hasUser) {
            const user = [socket.id]
            onlineUsers.set(id, user)
            onlineIds.set(socket.id, id)
        }
        else {
            const user = [...new Set([socket.id, ...hasUser])]
            onlineUsers.set(id, user)
            onlineIds.set(socket.id, id)
        }
    })

    socket.on('close', () => {
        removeSocket(socket.id)
    })
    socket.on('disconnect', () => {
        removeSocket(socket.id)
    })


    socket.on('message', ({ to, message }) => {
        const targetUserSockets = onlineUsers.get(to)

        if (targetUserSockets) {
            targetUserSockets.forEach(sock => {
                io.to(sock).emit('newMessage', message)
            })
        }

        // send message to this user other connections
        const thisUser = onlineIds.get(socket.id)
        const thisUserSockets = onlineUsers.get(thisUser)
        if (thisUserSockets) {
            thisUserSockets.forEach(sock => {
                if (sock !== socket.id) {
                    io.to(sock).emit('newMessage', message)
                }
            })
        }
    })

})


// run the server
const PORT = process.env.PORT || 5000
Server.listen(PORT, () => {
    console.log(`Server start on port ${PORT}`)
})
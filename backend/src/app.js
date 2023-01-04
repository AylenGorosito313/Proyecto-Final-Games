const express = require('express')
const morgan = require('morgan')
const genreRouter = require('./routes/genres.routes')
const gamesRouter = require('./routes/games.routes')
const usersRouter = require('./routes/users.routes')
const loginRouter = require('./routes/login.routes')
const cors = require('cors')
const platformRouter = require('./routes/platforms.routes')
const carritoRouter = require('./routes/carrito.routes')
const server = express()
server.use(cors())

server.use(morgan('dev'))
server.use(express.json())
server.use(gamesRouter)
server.use(loginRouter)
server.use(genreRouter)
server.use(usersRouter)
server.use(platformRouter)
server.use(carritoRouter)




module.exports = server
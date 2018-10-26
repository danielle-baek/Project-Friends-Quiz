const express = require('express')
const hbs = require('express-handlebars')
const router = require('./routes')
const question = require('./questionFunctions.js')
const server = express()

// configuration
server.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: 'hbs'
}))
server.set('view engine', 'hbs')
server.use(express.static('public'))
server.use(express.urlencoded({extended: false}))

server.use('/friends', router)
server.use('/friends', question)

// routes
server.get('/', (req, res) => {
  console.log('Home route has been hit [server.js]')
  res.redirect('/friends/home')
})


module.exports = server
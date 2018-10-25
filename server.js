const express = require('express')
const hbs = require('express-handlebars')
//const router = require('./routes')
const server = express()

// configuration
server.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: 'hbs'
}))
server.set('view engine', 'hbs')
server.use(express.static('public'))
server.use(express.urlencoded({extended: false}))

// server.use('/friends', router)

// routes
server.get('/', (req, res) => {
  console.log('friends without a dash at the end route hit')
  res.send('Please Insert Quiz here')
})

module.exports = server
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    console.log('/friends/ route hit')
  res.redirect('/friends/home')
})

router.get('/home', (req, res) => {
    console.log('home route hit')
  res.send('This is home')
})

router.get('/results', (req, res) => {
    console.log('results route hit')
  res.send('This is results')
})

router.get('/:id', (req, res) => {
  let id = req.params.id
    console.log('questions route hit')
    console.log(id)
  res.send('This is a question page')
})

module.exports = router
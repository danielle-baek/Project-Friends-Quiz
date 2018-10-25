const data = require('./questions.json')
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

router.get('/test', (req, res) => {
  console.log('testing')
  res.render('./questions.hbs')
})

// router.get('/test', (req, res) => {
//   console.log('testing')
//   res.render('./index.hbs')
// })

// router.get('/test', (req, res) => {
//   console.log('testing')
//   res.render('./result.hbs')
// })

router.get('/:id', (req, res) => {
  let id = req.params.id
  let ques = data.Questions[id - 1]
  console.log('questions route hit')
  console.log(ques)
  res.render('./questions.hbs', ques)
})

module.exports = router
